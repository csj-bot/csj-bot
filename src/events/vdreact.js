const logger = require("wax-logger");
const handler = require('wax-command-handler');
const vdreaction = require("../database/models/vdreact");

//futuramente serão levados para o db vdr_events
let count = 0;
const chatID = "856658304348454913";
//

module.exports = async (message) => {
    vdreaction.find(async function(err, reactions) {
        if (err) return console.error($`viewvideoreactions: mongoose:{err}`);

        //por enquanto não reage a bot, mas tem que reagir à lorita!!!
        if (message.channel.id == chatID && !message.author.bot)
            message.channel.send(reactions[count++].reaction);

        if (count >= reactions.length)
            count = 0;
    });
}