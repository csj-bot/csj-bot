/**
 *  Função: Banir um membro
 * 
 *  !!ban @<membro> <esclarecer o motivo>
 */

 module.exports = {
    name: "ban",
    description: "Banir membro",
    aliases: [ "banir", "bane" ],
    cooldown: 5,
    permissions: [ "BAN_MEMBERS" ],

    execute(client, message, args) {

        //Identificar membro a ser banido
        const user_banned   = message.mentions.users.first();
        const member_banned = message.guild.member(user_banned);

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
    },
};

const ban = function({message, args}){

}

module.exports = ban;
