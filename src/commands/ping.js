module.exports = {
  name: "ping",
  description: "medir latência da conexão do bot",
  aliases: [ "teste", "pong" ],
  usage: "!!ping",
  cooldown: 5,
  
  execute(client, message, args) {
    const bot_message = message.channel.send("Ping?");
    console.log("Ping requested");
    bot_message.edit(`Pong! A Latência é ${bot_message.createdTimestamp - message.createdTimestamp}ms.`);
  },
};