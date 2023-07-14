const { Client, GatewayIntentBits, IntentsBitField, ActivityType, Collection, Events, message, Partials, SlashCommandBuilder } = require('discord.js')
//loga com o .env 
require('dotenv').config()

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
// Evento que é executado quando o bot está pronto
client.once('ready', () => {
  console.log('Virado no jujutsu');

  //presence do bot
  client.user.setPresence({
    activities: [{ name: `Desenvolvedor pela janela`, type: ActivityType.Playing }],
    status: 'online',
});
});

// Evento que é executado quando uma mensagem é recebida
client.on('messageCreate', (message) => {
  // Verifica se a mensagem foi enviada por um usuário e não pelo próprio bot
  if (!message.author.bot) {
    console.log(`Nova mensagem de ${message.author.username}: ${message.content}`);
  }
  if (message.mentions.has(client.user.id)) {
    // Enviar uma mensagem de resposta
    message.channel.send('📦 > **Opa, ** digite `/help` para ver **alguns** dos meus comandos ');
  }
});

// Substitua "TOKEN_DO_SEU_BOT" pelo token de autenticação do seu bot
client.login(process.env.TOKEN)


