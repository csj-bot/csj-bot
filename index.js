const { Client } = require("discord.js");
const msToHMS = require('./src/msToHMS.js')
const client = new Client();
require('dotenv').config();

const commands = require('./src/commands.js');
const handler = require('./src/handler.js')

const commandConfig = new handler.CommandConfig("!!",
    true,
    "Espere **%TIME%** segundos para executar %CMD%",
    "Voce nao tem a permissao ``%PERM%`` para executar esse comando");

handler.setup(commandConfig);


console.log('Iniciando o bot..');

client.on("ready", async () => {
  console.log('bot iniciado');
  
  function status() {
    client.user.setActivity("Iniciado " + msToHMS(client.uptime), "PLAYING");
    
    setTimeout(status, 30000)
  }
  status()
});

client.on('message', commands);

client.login(process.env.TOKEN);

module.exports = client;

