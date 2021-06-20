const { MessageEmbed } = require("discord.js");

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
        const image = user.displayAvatarURL({ size: 512 });

        const embed = new MessageEmbed()
            .setAuthor("Avatar de " + message.author.tag, image)
            .setImage(image);

        message.channel.send(embed);
    },
};
