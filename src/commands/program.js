module.exports = {
    name: "program",
    aliases: ["programar", "marcar"],
    description: "Cria uma mensagem programavel",
    usage: "!!programar <data> <mensagem>",
    cooldown: 10,
    execute(client, message, args) {
        let unformatDate = args[0].toLowerCase()
        let msg = ''
        for (let i = 1; i < args.length; i++) {
            msg += args[i]
        }
        let date = new Date()
        let timestamp = convertDate(date, unformatDate)
        if(!timestamp) {
            message.reply('data invalida')
            return
        }
        message.channel.send(timestamp)
    }
}

function convertDate(date, text) {
    let formatList = [
        {
            format:/^[0-9]{2}[a-z]{1}/,
            date(text) {
                let num = text.match(/[0-9]{2}/)[0]
                let letter = text.match(/[a-z]{1}/)[0]
                if(letter === 'h') {
                    date.setHours(num)
                    return date.getTime()
                }
            }
        },
        {
            format:/^[0-9]{1}[a-z]{1}/,
            date(text) {
                let num = text.match(/[0-9]{1}/)[0]
                let letter = text.match(/[a-z]{1}/)[0]
                if (letter === 'h') {
                    date.setHours(num)
                    return date.getTime()
                }
            }
        },
        {
            format:/^[0-9]{2}:[0-9]{2}/,
            date(text) {
                nums = text.split(/:/)
                
                console.log(nums)
                date.setHours(+nums[0])
                date.setMinutes(+nums[1])
                return date.getTime()
            }
        }
    ]

    let formatIndex = -1

    for(let i = 0;i<formatList.length;i++) {
        let format = formatList[i]
        var regex = text.match(format.format)

        if (regex === null) continue
        let timestamp = format.date(text)
        if(timestamp < Date.now()) return false
        return timestamp
    }

    return false
 
}