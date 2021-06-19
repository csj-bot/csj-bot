const handler = require('wax-command-handler')
const { readdirSync } = require('fs')

for (const file of readdirSync(__dirname + "/commands").filter(file => file.endsWith('.js'))) {
    
    const command = require(`./commands/${file}`);
    if (!command.name) continue;
    
    handler.addCommand(command);
}

module.exports = handler