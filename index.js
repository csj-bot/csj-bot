const { Client } = require("discord.js")
const client = new Client(); 

require('dotenv').config();

client.login(process.env.TOKEN)