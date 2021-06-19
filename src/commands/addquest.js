module.exports = {
        name: "test",
        description: "testing commands",
        aliases: [ "t", "guei" ],
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