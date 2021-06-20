/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

const videoreaction = require("../database/models/videoreaction");


 module.exports = {
    name: "viewvideoreaction",
    description: "adicionar reações aos videos novos",
    aliases: ["addvideoreaction"],
    usage: "!!addvideoreact <nova reação>",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],

    execute(client, message, args) {
        const reaction = new videoreaction({
            reaction: args.join(" "),
        });

        reaction.save(function (err, reaction) {
            if (err) return console.log(`addvideoreaction: mongoose: ${err}`);
        });

        message.channel.send("Uma nova reação de vídeo foi adicionada aos repositórios!");
    },
};