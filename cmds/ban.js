exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.cache.find(role => role.name === process.env.STAFF_ROLE);
    if (!modRole)
        return message.reply("The Mods role does not exist");
        return console.log("The Mods role does not exist");

    if (!message.member.roles.cache.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to ban");

    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return message.reply("");

    const banMember = message.mentions.members.first();

    banMember.ban(reason.join(" ")).then(member => {
        message.reply(`${member.user.username} was succesfully banned.`);
    });
};