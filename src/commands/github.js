/**
 *  Função: retornar o repositorio do projeto
 *  
 *  !!github
 *  !!git
 *  !!gh
 */

module.exports = {

    name: 'github',
    aliases: ["git", "gh"],
    cooldown: 5,
    description: "retorna o repositorio do projeto",
    execute(client, message) {
        message.channel.send("https://github.com/csj-bot/csj-bot");

    },
    slash(client, handler, data) {
        handler.postSlashMessage(data, "https://github.com/csj-bot/csj-bot")
    }
};
