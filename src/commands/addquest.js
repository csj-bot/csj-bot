module.exports = {
        name: "addquest",
        description: "adicionar uma pergunta/reflexão",
        aliases: [ "pergunta", "perguntar" ],
        usage: "!!addquest <pergunta>",
        cooldown: 5,

        execute(client, message, args) {
                if (typeof client.configs["questions"] == 'undefined'){
                        client.configs["questions"] = [];
                }       
	        let question = "";
                for (i in args) {
		        question += " " + args[i];
                }                                        
	        client.configs["questions"].push(question);
                const bot_message = message.channel.send("Sua questão foi adicionada ao repositório de questões!");
        },
};
