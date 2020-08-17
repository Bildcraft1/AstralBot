const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const guildInvites = new Map();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("========AstralNetwork Bot========");
  console.log("=======By Italiano at Arch=======");
  console.log(`Logged in with ${client.user.tag}!`);
  client.user.setActivity(
    `AstralNetwork Bot ${process.env.VERSION} | ?? or ping me`
  );
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.id === process.env.LOGID
  );
  if (!channel) return;
  channel.send(`L'utente ${member} è joinato`);
});

client.on("messageDelete", (message) => {
  if (!message.partial) {
    const channel = client.channels.cache.get(process.env.LOGID);
    if (channel) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Deleted Message")
        .addField(
          "Author",
          `${message.author.tag} (${message.author.id})`,
          true
        )
        .addField(
          "Channel",
          `${message.channel.name} (${message.channel.id})`,
          true
        )
        .setDescription(message.content)
        .setTimestamp();
      channel.send(embed);
    }
  }
});

client.on("inviteCreate", async (invite) =>
  guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
);
client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
  client.guilds.cache.forEach((guild) => {
    guild
      .fetchInvites()
      .then((invites) => guildInvites.set(guild.id, invites))
      .catch((err) => console.log(err));
  });
});

client.on("guildMemberAdd", async (member) => {
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
});

client.login(process.env.BOT_TOKEN);
