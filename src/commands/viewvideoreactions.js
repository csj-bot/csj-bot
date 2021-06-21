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

            let all_reactions_text = "```c\n";
            for (n in reactions){
                all_reactions_text += `${n}: | ${reactions[n].reaction}\n`;
            }
            all_reactions_text += "```";

            message.channel.send(all_reactions_text);
        })

    },
};