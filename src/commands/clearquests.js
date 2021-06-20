const QuestionSchema = require("../database/models/question");

module.exports = {
    name: "clearquests",
    description: "Remover todas as perguntas",
    aliases: [ "limparperguntas", "removerperguntas" ],
    usage: "!!clearquests",
    cooldown: 5,
    permissions: [ "MANAGE_MESSAGES" ],

    async execute(client, message, args) {
        await QuestionSchema.deleteMany({ "guildId": message.guild.id });

        message.channel.send("Questões resetadas com sucesso!");
    },
};
