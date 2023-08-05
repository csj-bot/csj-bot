module.exports = async ({ client, interaction }) => {

    let funcao = interaction.customId // Nome da função que será importada
    let dados = interaction.values[0] // Dados para a função

    // Solicitando a função e executando
    require(`./functions/${funcao}`)({ client, interaction, dados })
}