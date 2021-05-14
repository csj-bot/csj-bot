const { Client } = require("discord.js")
const client = new Client(); 

const commands = require('./src/commands.js')

require('dotenv').config();
console.log('bot iniciado')
client.on('message', commands)

client.login(process.env.TOKEN)

module.exports = client