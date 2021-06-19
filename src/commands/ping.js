module.exports = {
    name: 'ping',
    aliases:['pg'],
    cooldown: 5,
    description: "retorna o ping",
    async execute(client, message) {
        const bot_message = await message.channel.send("Ping?");
        console.log("Ping requested");
        bot_message.edit(`Pong! A Latência é ${bot_message.createdTimestamp - message.createdTimestamp}ms.`);
    },
    slash(client, handler, data) {
        console.log(data) 
        handler.postSlashMessage(data, "https://github.com/csj-bot/csj-bot")
    }
}