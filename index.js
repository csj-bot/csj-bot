const handler = require('wax-command-handler');
const msToHMS = require('./src/msToHMS.js');
const db = require('./src/database/connection.js');

const { readdirSync } = require('fs');
const { Client } = require("discord.js");

require('dotenv').config();

const client = new Client();
const prefix = "!"

client.config = {}

console.log('Iniciando o bot..');

client.on("ready", async () => {
    const commandConfig = new handler.CommandConfig(
        client,
        prefix,
        true,
        "Espere **%TIME%** segundos para executar `%CMD%`",
        "Voce nao tem a permissao `%PERM%` para executar esse comando",
        "O uso correto desse comando e `%USAGE%`");

    handler.setup(commandConfig);

    handler.useSlashHandler();
    handler.useDefaultHelp(handler);

    for (const file of readdirSync(__dirname + "/src/commands").filter(file => file.endsWith('.js'))) {

        const command = require(`./src/commands/${file}`);
        if (!command.name) continue;

        handler.addCommand(command);

        // quando adicionar ou modificar algum `slash command`
        //if(command.slash) handler.addSlashCommand(command);

        if (command.slash) handler.listSlashCommand(command);
    }

    console.log('bot iniciado');

    function status() {
        client.user.setActivity("Iniciado " + msToHMS(client.uptime), "PLAYING");

        setTimeout(status, 30000);
    }
    status();
});

client.on('message', message => {
    handler.messageReceived(message);
});

client.ws.on("INTERACTION_CREATE", async data => {
    handler.wsInteractionReceived(data);
})

client.login(process.env.TOKEN);

module.exports = client;