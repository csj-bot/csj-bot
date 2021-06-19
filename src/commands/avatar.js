/**
 *  Função: exibir foto de perfil de quem solicitar o comando
 *  
 *  !!avatar
 *  !!avatar @<membro_tag>
 */

const { MessageAttachment } = require('discord.js');

module.exports = async ({message, args, client}) =>{
    
    //Identificando usuário a qual pegar avatar
    const user = await message.mentions.users.first() || message.author;
    
    //Pegar avatar e enviar como anexo
    const image = user.displayAvatarURL();
    const anexo = new MessageAttachment(image);
    message.channel.send(`aqui seu avatar em anexo:`, anexo);

}
