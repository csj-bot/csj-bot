const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('comandos'),
    async execute(client, interaction) {


        const embed = new EmbedBuilder()
            .setColor("#900020")
             .setDescription("\n**📑  A CAVALARIA CHEGOU  📑 **"  + 
            ("\n") + 
            ("\n") + 
            ("\n**⌨️ PROGRAMAÇÃO ⌨️**") + 
            ("\n") +  
            ("\n`/docs (exibe a documentação de uma determinada linguagem)`") + 
            ("\n") +
            ("\n") +
            ("\n**📀 UTILITARIOS 📀**") + 
            ("\n") +  
            ("\n`/help (exibe ajuda em relação ao **bot**)`") + 
            ("\n") +
            ("\n") +
            ("\n") +
            ("\n**👨🏻‍🔧 CONTATE AJUDA DIRETAMENTE MARCANDO UM <@&1000541821253984366> <@&1063272878939840562> <@&691799663514222652> <@&691799959221305365> <@&1061713050949910558>**") 
            
            )

            
            interaction.reply({ embeds: [embed], ephemeral: false })


    }
}