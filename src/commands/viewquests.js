module.exports = {
    name: "viewquests",
    description: "ver questões adicionadas",
    aliases: [ "verquestoes", "questoes", "quests" ],
    usage: "!!viewquests",
    cooldown: 5,

    execute(client, message, args) {
		bot_message = message.channel.send("Carregando questões");
		questions_text = "";
		if (typeof configs["questions"] === 'undefined') {
			bot_message.edit("Não há nenhuma questão em aberto no momento... Mas obrigado por se voluntariar a ajudar!");
			return;
		}
		for (i in configs["questions"]) {
			questions_text += "\n```Questão " + i + ": " + configs["questions"][i] + "```";
		}
		bot_message.edit("Questões em aberto:" + questions_text);
    },
};

