const videoreaction = require("../database/models/videoreaction");
const logger = require("wax-logger");
const { mainSender } = require("../logSenders");

module.exports = {
    name: "deletevideoreaction",
    description: "Remover uma reação de vídeo",
    aliases: ["deletevideoreactions", "removevideoreaction", "delvideoreaction", "deletevideoreact"],
    usage: "!!deletevideoreaction <numero>",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],

    async execute(client, message, args) {
        
        videoreaction.find(async (err, reactions) => {
            if (err) return logger.logError(mainSender, `err: deletevideoreaction: ${err}`, true);

            await videoreaction.findOneAndDelete({ "reaction" : reactions[args[0]].reaction })

            message.channel.send(`VideoReaction "${reactions[args[0]].reaction}" foi deletada`);
        });
    },
};