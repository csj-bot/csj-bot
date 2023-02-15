const { pingSender } = require("../logSenders")

module.exports = {
    name: 'ping',
    aliases: ['pg', 'teste', 'pong'],
    usage: "!!ping",
    cooldown: 5,
    description: "medir latência da conexão do bot",
    async execute(client, message) {
        const bot_message = await message.channel.send("Ping?")

        client.logger.logInfo(pingSender, "Ping request", true)

        bot_message.edit(`Pong! A Latência é ${bot_message.createdTimestamp - message.createdTimestamp}ms.`)
    },
    slash(client, handler, data) {
        handler.postSlashMessage(data, "https://github.com/csj-bot/csj-bot")
    }
}