const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Veja os comandos do bot'),
    async execute({ client, interaction }) {

        const embed = new EmbedBuilder()
            .setColor("#900020")
            .setDescription("\n**📑  A CAVALARIA CHEGOU  📑 **" +
                ("\n") +
                ("\n") +
                ("\n**⌨️ PROGRAMAÇÃO ⌨️**") +
                ("\n") +
                ("\n</docs:1131055966734000148> ( `exibe a documentação de uma linguagem escolhida`)") +
                ("\n") +
                ("\n") +
                ("\n**📀 UTILITARIOS 📀**") +
                ("\n") +
                ("\n</help:1131063412131102891> ( `exibe ajuda em relação ao bot` )") +
                ("\n") +
                ("\n") +
                ("\n") +
                ("\n**👨🏻‍🔧 CONTATE AJUDA DIRETAMENTE MARCANDO ALGUM DESTES CARGOS <@&1000541821253984366> <@&1063272878939840562> <@&691799663514222652> <@&691799959221305365> <@&1061713050949910558>**")
            )

        interaction.reply({ embeds: [embed], ephemeral: true })
    }
}