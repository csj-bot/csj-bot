const { MessageAttachment } = require("discord.js");
 
module.exports = {

    //info 
    name: 'avatar',
    description: "Exibir foto de perfil",
    aliases: [ "foto", "perfil" ],
    cooldown: 5,

    execute(client, message, args) {

        //Identificando usuário a qual pegar avatar
        const user = message.mentions.users.first() || message.author;
        
        //Pegar avatar e enviar como anexo
        const image = user.displayAvatarURL();
        const anexo = new MessageAttachment(image);
        message.channel.send(`aqui seu avatar em anexo:`, anexo);

    },
};
