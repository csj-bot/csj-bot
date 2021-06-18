/**
 *  Função: exibir foto de perfil de quem solicitar o comando
 *  
 *  !!avatar
 */

const { MessageAttachment } = require('discord.js');

const avatar = function({message}){
    const image = message.author.displayAvatarURL();
    const anexo = new MessageAttachment(image);
    message.channel.send(`aqui seu avatar em anexo:`, anexo);
}

module.exports = avatar;
