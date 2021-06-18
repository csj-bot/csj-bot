/**
 *  Função: Banir um membro
 * 
 *  !!ban @<membro> <esclarecer o motivo>
 */

const ban = function({message, args}){

    //Identificar membro a ser banido
    const user_banned   = message.mentions.users.first();
    const member_banned = message.guild.member(user_banned);

    //Verificar permissão do autor do ban
    if (!message.member.hasPermission('BAN_MEMBERS')){
        message.reply(`tu não pode banir ninguém não, mané`);
        return;
    }

    //Identificar o motivo
    let the_reason = `(by: ${message.author.tag})`;
    for (i in args) {
        if (i != 0){
            the_reason += " " + args[i];
        }
    }  

    //Banir
    member_banned
    .ban({
        reason: the_reason,
    })
    .then(() => {
        message.reply(`O membro ${user_banned.tag} foi banido`);
    })
    .catch(err => {
        message.reply(`não foi possível banir o membro ${user_banned.tag}`);
        console.error(err);
    });
}

module.exports = ban;
