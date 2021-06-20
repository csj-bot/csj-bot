const QuestionSchema = require("../database/models/question");

module.exports = {
    name: "viewquests",
    description: "ver questões adicionadas",
    aliases: ["verquestoes", "questoes", "quests"],
    usage: "!!viewquests",
    cooldown: 5,

    async execute(client, message, args) {
        const questions = QuestionSchema.find().cursor();

        let lgt = questions.readableLength.clamp(0, 9);
        let msg = "```\n";

        for (let i = 0, doc = await questions.next(); i < lgt, doc !== null; i++, doc = await questions.next()) {
            msg += (i + 1) + ": " + doc.get("question") + "\n";
        }

        msg += "```"

        message.channel.send(msg);
    },
};

// ESTOURO DA PILHA :sunglases:

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};