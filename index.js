const { ActivityType } = require('discord.js')

// dotenv
require('dotenv').config()

const { CeiraClient } = require("./client")
const { slash_commands } = require('./commands')

// Configurando o bot e subindo os comandos slash
let client = new CeiraClient()
slash_commands(client)

// Bot pronto para uso
client.discord.once("ready", c => {
    console.log(`🟢 | É OS GURI, BOT RODANDO ${c.user.tag}`)
    client.discord.user.setActivity("Oferencimento ", { type: ActivityType.Playing })
})

// Listener de interações com o bot
client.discord.on("interactionCreate", async interaction => {

    if (interaction.isStringSelectMenu()) // Interações geradas no uso de menus de seleção
        return require("./interactions/menus.js")({ client, interaction })

    if (!interaction.isChatInputCommand()) return

    const command = interaction.client.commands.get(interaction.commandName)
    if (!command)
        return console.error("Comando não encontrado")

    try {
        await command.execute({ client, interaction })
    }
    catch (error) {
        console.error(error)
        await interaction.reply({ content: ":octagonal_sign: | Houve um erro ao executar esse comando!", ephemeral: true })
    }
})

client.login(client.x.token)