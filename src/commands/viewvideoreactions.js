/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

 const videoreaction = require("../database/models/videoreaction");

 module.exports = {
    name: "viewvideoreactions",
    description: "ver as reações à videos novos",
    aliases: ["viewvideoreaction", "viewvideoreacts", "viewvideoreact"],
    usage: "!!viewvideoreactions",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],

    execute(client, message, args) {
        videoreaction.find(function (err, reactions) {
            if (err) return console.error($`viewvideoreactions: mongoose:{err}`);
            for (n in reactions){
                message.channel.send(`${reactions[n].reaction}\n`);
            }
        })
    },
};