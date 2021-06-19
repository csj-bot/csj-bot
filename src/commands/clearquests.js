module.exports = {
    name: "clearquests",
    description: "Remover todas as perguntas",
    aliases: [ "limparperguntas", "removerperguntas" ],
    usage: "!!clearquests",
    cooldown: 5,
    permissions: [ "MANAGE_MESSAGES" ],

    execute(client, message, args) {
		if (typeof configs["questions"] == 'undefined') {
			message.channel.send("Não há questões para limpar!");
			return;
		}
		configs["questions"] = undefined;
	
		message.channel.send("Questões resetadas com sucesso!");
    },
};
