const QuestionSchema = require("../database/models/question")

module.exports = {
    name: "addquest",
    description: "adicionar uma pergunta/reflexão",
    aliases: ["pergunta", "perguntar"],
    usage: "!!addquest <pergunta>",
    cooldown: 5,

    execute(client, message, args) {
        const question = new QuestionSchema({
            userId: message.author.id,
            question: args.join(" "),
            guildId: message.guild.id
        })

        question.save()

        message.channel.send("Sua questão foi adicionada ao repositório de questões!")
    }
}