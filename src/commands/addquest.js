module.exports = async ({message, args, configs}) => {
        if (typeof configs["questions"] == 'undefined'){    		configs["questions"] = [];
        }       
	let question = "";
        for (i in args) {
		question += " " + args[i];
        }                                        
	configs["questions"].push(question);
        const bot_message = await message.channel.send("Sua questão foi adicionada ao repositório de questões!");
}
