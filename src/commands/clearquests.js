module.exports = async ({message, args, configs}) => {
	if (typeof configs["questions"] == 'undefined') {
		message.channel.send("Não há questões para limpar!");
		return;
	}
	configs["questions"] = undefined;

	message.channel.send("Questões resetadas com sucesso!");
}
