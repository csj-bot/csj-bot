/** 
 *  Função: Kickar um membro
 *
 *  !!kick @<membro> <esclarecer o motivo>
 */

const kick = function({message, args}){

    //Identificar membro a ser kickado
    const user_kicked   = message.mentions.users.first();
    const member_kicked = message.guild.member(user_kicked);

    //Verificar permissão do autor do kick
    if (!message.member.hasPermission('KICK_MEMBERS')){
        message.reply(`tu não pode kickar ninguém não, mané`);
        return;
    }

    //Identificar o motivo
    let the_reason = `(by: ${message.author.tag})`;
    for (i in args) {
        if (i != 0){
            the_reason += " " + args[i];
        }
    }   

    //Kickar
    member_kicked
    .kick(the_reason)
    .then(() => {
        message.reply(`O membro ${user_kicked.tag} foi kickado`);
    })
    .catch(err => {
        message.reply(`não foi possível kickar o membro ${user_kicked.tag}`);
        console.error(err);
    });
}

module.exports = kick;
