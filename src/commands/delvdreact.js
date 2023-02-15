const videoreaction = require("../database/models/vdreact")
const logger = require("wax-logger")

const { mainSender } = require("../logSenders")

module.exports = {
    name: "delvdreaction",
    description: "Remover uma reação de vídeo",
    aliases: ["delvdreact", "deletevdreact", "delvdreacts", "deletevdreacts"],
    usage: "!!delvdreaction <n1>",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],

    async execute(client, message, args) {

        videoreaction.find(async (err, reactions) => {
            if (err) return logger.logError(mainSender, `err: deletevideoreaction: ${err}`, true)

            for (n in args) {
                await videoreaction.findOneAndDelete({ "reaction": reactions[args[n]].reaction })
                await message.channel.send(`VideoReaction "${reactions[args[n]].reaction}" foi deletada`)
            }
        })
    }
}