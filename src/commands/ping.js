module.exports = async ({message}) => {
  const bot_message = await message.channel.send("Ping?");
  console.log("Ping requested");
  bot_message.edit(`Pong! A Latência é ${bot_message.createdTimestamp - message.createdTimestamp}ms.`);
}
