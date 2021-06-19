/**
 *  Função: exibir foto de perfil de quem solicitar o comando
 *  
 *  !!avatar
 *  !!avatar @<membro_tag>
 */

 module.exports = {

    name: 'avatar',
    aliases: [ "foto", "perfil" ],
    cooldown: 5,

    execute({message}) {

        //Identificando usuário a qual pegar avatar
        const user = message.mentions.users.first() || message.author;
        
        //Pegar avatar e enviar como anexo
        const image = user.displayAvatarURL();
        const anexo = new MessageAttachment(image);
        message.channel.send(`aqui seu avatar em anexo:`, anexo);

    },
};
