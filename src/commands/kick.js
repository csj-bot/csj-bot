module.exports = {
    name: 'kick',
    description: "Expulsar membro (cujo pode retornar)",
    aliases: [ "expulsar", "expulse", "kickar" ],
    usage: "!!kick @<member_id> <motivo>",
    cooldown: 5,
    permissions: [ "KICK_MEMBERS" ],

    execute(client, message, args) {
        //Identificar membro a ser kickado
        const user_kicked   = message.mentions.users.first();
        const member_kicked = message.guild.member(user_kicked);

        //Identificar o motivo
        let the_reason = `(by: ${message.author.tag}) ${args.join(" ")}`;

        // gustavo tu adora dar o cuzinho com laco for desnecessario ne?

        //Kickar
        member_kicked.kick(the_reason)
            .then(() => {
                message.reply(`o membro ${user_kicked.tag} foi kickado`);
            })
            .catch(err => {
                message.reply(`não foi possível kickar o membro ${user_kicked.tag}`);
                console.error(err);
            });
    },
};
