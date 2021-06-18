const { Client } = require("discord.js");
const client = new Client(); 

const commands = require('./src/commands.js');

require('dotenv').config();
client.on("ready", async () =>  {
	console.log('Iniciando o bot..');
	client.user.setActivity("Yes baby, i'm on discord","PLAYING");
});

client.on('message', commands);

client.login(process.env.TOKEN);

module.exports = client;

