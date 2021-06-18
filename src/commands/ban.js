const ban = function({message}){
    const user_banned   = message.mentions.users.first();
    const member_banned = message.guild.member(user_banned);

    if (!message.member.hasPermission('BAN_MEMBERS')){
        message.reply(`tu não pode banir ninguém não, mané`);
        return;
    }

    member_banned
    .ban({
        reason: 'Mensagem q vai aparecer nos logs',
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
