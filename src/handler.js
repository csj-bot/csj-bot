const handler = require('wax-command-handler')
const { readdirSync } = require('fs')
const commandConfig = new handler.CommandConfig("!!",
    true,
    "Espere %TIME% segundos para executar %CMD%",
    "Voce nao tem a permissao %PERM% para executar esse comando");

handler.setup(commandConfig);

for (const file of readdirSync(__dirname + "/commands").filter(file => file.endsWith('.js'))) {
    const command = require(`./commands/${file}`);
    handler.addCommand(command);
}

module.exports = handler