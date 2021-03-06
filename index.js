const logger = require("wax-logger");
const handler = require('wax-command-handler');
const msToHMS = require('./src/msToHMS.js');
const db = require('./src/database/connection.js');

const { readdirSync } = require('fs');
const { Client } = require("discord.js");
const { mainSender } = require("./src/logSenders");

require('dotenv').config();

const client = new Client();




client.logger = logger;

logger.logInfo(mainSender, "Iniciando...", true);

client.on("ready", async () => {
    const commandConfig = new handler.CommandConfig(
        client,
        process.env.PREFIX,
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

    for (const file of readdirSync(__dirname + "/src/ready").filter(file => file.endsWith('.js'))){
        require("./src/ready/" + file)();
    }


    function status() {
        client.user.setActivity("Iniciado " + msToHMS(client.uptime), "PLAYING");

        setTimeout(status, 30000);
    }
    status();
});

client.on('message', message => {
    handler.messageReceived(message);

    for (const file of readdirSync(__dirname + "/src/events").filter(file => file.endsWith('.js'))){
        require("./src/events/" + file)(message);
    }
});

client.ws.on("INTERACTION_CREATE", async data => {
    handler.wsInteractionReceived(data);
})

client.login(process.env.TOKEN);

module.exports = client;
