module.exports = async (client, member) => {
  const cachedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    const usedInvite = newInvites.find(
      (inv) => cachedInvites.get(inv.code).uses < inv.uses
    );
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `${member.user.tag} is the ${member.guild.memberCount} to join.\nJoined using ${usedInvite.inviter.tag}\nNumber of uses: ${usedInvite.uses}`
      )
      .setTimestamp()
      .setTitle(`${usedInvite.url}`);
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.id === process.env.INVITELOGID
    );
    if (welcomeChannel) {
      welcomeChannel.send(embed).catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
};
