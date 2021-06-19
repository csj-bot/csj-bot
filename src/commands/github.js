/**
 *  Função: retornar o repositorio do projeto
 *  
 *  !!github
 *  !!git
 *  !!gh
 */

 module.exports = {

    name: 'github',
    aliases: [ "git", "gh" ],
    cooldown: 5,
    description: "retorna o repositorio do projeto",
    execute(obj) {
        console.log(obj)
        let message = obj.message
        message.channel.send("https://github.com/csj-bot-csj-bot");

    },
};
