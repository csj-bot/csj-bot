const kick = function({message}){
    const user_kicked   = message.mentions.users.first();
    const member_kicked = message.guild.member(user_kicked);

    if (!message.member.hasPermission('KICK_MEMBERS')){
        message.reply(`tu não pode kickar ninguém não, mané`);
        return;
    }

    member_kicked
    .kick('Mensagem q vai aparecer nos logs')
    .then(() => {
        message.reply(`O membro ${user_kicked.tag} foi kickado`);
    })
    .catch(err => {
        message.reply(`não foi possível kickar o membro ${user_kicked.tag}`);
        console.error(err);
    });
}

module.exports = kick;
