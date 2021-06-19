/**
 *  Função: exibir foto de perfil de quem solicitar o comando
 *  
 *  !!avatar
 *  !!avatar @<membro_tag>
 */

const { MessageAttachment } = require('discord.js');

module.exports = async ({message, args, client}) =>{
    console.log(message.content);


    const user = await message.mentions.users.first() || message.author;
    console.log(args[0]);
    console.log(user);


    const image = user.displayAvatarURL();
    const anexo = new MessageAttachment(image);
    message.channel.send(`aqui seu avatar em anexo:`, anexo);

}
