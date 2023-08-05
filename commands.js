const { REST } = require('@discordjs/rest')
const { Routes, Collection } = require('discord.js')

const { readdirSync } = require('fs')

let commands = []

function slash_commands(client) {

    client.discord.commands = new Collection()
    const rest = new REST({ version: "10" }).setToken(client.x.token)

    // Linkando os comandos slash disponíveis
    if (!client.x.delete_slash) {

        console.log("🟠 | Atualizando comandos slash")

        for (const file of readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'))) {
            const command = require(`./commands/${file}`)

            if ("data" in command && "execute" in command)
                commands.push(command.data.toJSON())
            else
                console.log(`🔴 | O comando ${command.name} está com os campos "data" ou "execute" ausentes`)
        }

        console.log("🟢 | Comandos globais atualizados com sucesso.")
    }

    if (!client.x.delete_slash) { // Registrando os comandos slash
        if (client.x.force_update) { // Atualizando forçadamente os comandos globais ( demora para atualizar )
            rest.put(Routes.applicationCommands(client.x.clientId), { body: commands })
                .then(() => console.log("🟢 | Comandos globais atualizados com sucesso."))
                .catch(console.error)
        }

        // Registrando os comandos privados no servidor ( padrão do bot / atualiza instantaneamente )
        rest.put(Routes.applicationGuildCommands(client.x.clientId, process.env.GUILD_ID), { body: commands })
            .then(() => console.log("🟢 | Comandos privados do servidor atualizados com sucesso."))
            .catch(console.error)

    } else { // Removendo os comandos slash

        console.log("🟠 | Excluindo os comandos slash registrados")

        // Removendo todos os comandos globais
        rest.put(Routes.applicationCommands(client.x.clientId), { body: [] })
            .then(() => console.log("🟢 | Comandos globais excluídos com sucesso."))
            .catch(console.error);

        // Removendo todos os comandos privados ( registrados num único servidor )
        rest.put(Routes.applicationGuildCommands(client.x.clientId, process.env.GUILD_ID), { body: [] })
            .then(() => console.log("🟢 | Comandos privados excluídos com sucesso."))
            .catch(console.error);
    }

    if (!client.x.delete_slash) {
        console.log("🔵 | Ordenando comandos")

        // Linhas usadas para dizer ao bot quais comandos existem, e define os nomes para ele esperar por interações slash
        for (const file of readdirSync(`${__dirname}/commands/`).filter(file => file.endsWith('.js'))) {
            const command = require(`./commands/${file}`)

            if ("data" in command && "execute" in command)
                client.discord.commands.set(command.data.name, command)
            else
                console.log(`🔴 | O comando ${command.name} está com os campos "data" ou "execute" ausentes`)
        }
    }
}

module.exports.slash_commands = slash_commands