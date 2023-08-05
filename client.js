const { Client, GatewayIntentBits, Partials } = require('discord.js')

// Alterna entre o modo normal e modo de testes
const update_commands = 0
let modo_develop = 0, force_update = 0
let token = process.env.TOKEN, clientId = process.env.CLIENT_ID

// Ative para limpar os comandos slash locais e globais
let delete_slash = 0

if (update_commands) // Force update é utilizado para forçar a atualização dos comandos slash
    modo_develop = 0, force_update = 1 // Forçar um update faz com que o bot registre comandos globais ( visíveis de qualquer servidor )

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [
        Partials.Message,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.User,
        Partials.Channel
    ]
})

class CeiraClient {
    constructor() {
        this.discord = client
        this.x = {
            token: token,
            clientId: clientId,

            modo_develop: modo_develop,
            force_update: force_update,
            delete_slash: delete_slash
        }
    }

    login(token) {
        return this.discord.login(token)
    }

    id() {
        return this.discord.user.id
    }

    user() {
        return this.discord.user
    }
}

module.exports.CeiraClient = CeiraClient