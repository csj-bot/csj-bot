module.exports = {
    name: "program",
    aliases: ["programar", "marcar"],
    description: "Cria uma mensagem programavel",
    usage: "!!programar <data> <mensagem>",
    cooldown: 10,
    execute(client, message, args) {
        let unformatDate = args[0]
        let msg = ''
        for (let i = 1; i < args.length; i++) {
            msg += args[i]
        }
        let date = new Date()
        let err = convertDate(date, unformatDate)
        if(err) {
            message.reply('data invalida')
            return
        }
        message.channel.send(date.getTime())
    }
}

function convertDate(date, text) {
    if(text.length >= 2 && text.length <= 3) {
        
    } else {
        return true
    }
}