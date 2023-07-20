const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serv')
        .setDescription('infos do servidor'),
    async execute(client, interaction) {
        // se vira ai 
        const niveis_verificacao = ["NONE", "LOW", "MEDIUM", "HIGH", "HIGHEST"]
        const icone_server = interaction.guild.iconURL({ size: 2048 })
        let dono_sv = interaction.guild.ownerId
        const dono_membro = await interaction.guild.members.fetch(dono_sv)
        const canais_texto = interaction.guild.channels.cache.filter((c) => c.type === 0).size
        const canais_voz = interaction.guild.channels.cache.filter((c) => c.type === 2).size
        const categorias = interaction.guild.channels.cache.filter(c => c.type === 4).size
        const qtd_canais = canais_texto + canais_voz
        const qtd_membros = interaction.guild.memberCount
        const data_entrada = `<t:${Math.floor(interaction.guild.joinedTimestamp / 1000)}:f>` // Entrada do bot no server
        const diferenca_entrada = `<t:${Math.floor(interaction.guild.joinedTimestamp / 1000)}:R>`
        const data_criacao = `<t:${Math.floor(interaction.guild.createdAt / 1000)}:f>` // Criação do servidor
        const diferenca_criacao = `<t:${Math.floor(interaction.guild.createdAt / 1000)}:R>`

        const embed = new EmbedBuilder()
            .setTitle(interaction.guild.name)
            .setImage(icone_server)
            .setColor("#900020")
            .addFields(
                {
                    name: `**Identificador**`,
                    value: `\`${interaction.guild.id}\``,
                    inline: true
                },
                {
                    name: `:busts_in_silhouette: **Membros**`,
                    value: `:bust_in_silhouette: **Atual:** \`${qtd_membros}\`\n:arrow_up: **Max: **\`${interaction.guild.maximumMembers}\``,
                    inline: true
                },
                {
                    name: `:unicorn: **Dono**`,
                    value: dono_sv,
                    inline: true
                },
            )
            .addFields(
                {
                    name: `:placard: **Canais ( ${qtd_canais} )**`,
                    value: `:card_box: **Categorias:** \`${categorias}\`\n:notepad_spiral: **Texto:** \`${canais_texto}\`\n:speaking_head: **Voz:** \`${canais_voz}\``,
                    inline: true
                },
                {
                    name: `:vulcan: **Entrada**`,
                    value: `${data_entrada}\n[ ${diferenca_entrada} ]`,
                    inline: true
                },
                {
                    name: `:birthday: **Criação**`,
                    value: `${data_criacao}\n[ ${diferenca_criacao} ]`,
                    inline: true
                }
            )
            .addFields(
                {
                    name: `:shield: **Verificação**`,
                    value: `**${niveis_verificacao[interaction.guild.verificationLevel]}**`,
                    inline: true
                },
                {
                    name: `**Emojis ( ${interaction.guild.emojis.cache.size} )**`,
                    value: ` **figurinhas ( ${interaction.guild.stickers.cache.size} )**`,
                    inline: true
                }
            )

        if (interaction.guild.premiumSubscriptionCount > 0)
            embed.addFields(
                {
                    name: `**Boosts ( ${interaction.guild.premiumSubscriptionCount} )**`,
                    value: `:passport_control: **Cargos: ** \`${interaction.guild.roles.cache.size - 1}\``,
                    inline: true
                }
            )
        else
            embed.addFields(
                {
                    name: `:passport_control: **Cargos ( ${interaction.guild.roles.cache.size - 1} )**`,
                    value: '⠀',
                    inline: true
                }
            )

        return interaction.reply({ embeds: [embed], ephemeral: false })
    }
}