const docs = {
    "javascript": "**Documentação do Javascript**\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "python": "**Documentação do Python**\nhttps://www.python.org",
    "csharp": "**Documentação do C#**\nhttps://learn.microsoft.com/en-us/dotnet/csharp/",
    "discordjs": "**Documentação do Discord.js**\nhttps://discordjs.guide/#before-you-begin",
    "c++": "**Documentação do C++**\nhttps://devdocs.io/cpp/"
}

module.exports = async ({ client, interaction, dados }) => {

    interaction.reply({ content: docs[dados] })
}