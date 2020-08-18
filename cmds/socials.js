const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Socials")
    .setDescription("List of all of AstralNetwork Socials")
    .addFields(
      { name: "Discord", value: `Use command 'invite'`, inline: true },
      { name: "Minecraft", value: `mc.astral-network.net`, inline: true },
      { name: "Telegram", value: `Use command 'telegram'`, inline: true },
      { name: "Website", value: `https://www.astral-network.net`, inline: true }
    )
    .setTimestamp()
    .setFooter(
      `AstralBot ${process.env.VERSION}`,
      "https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png"
    );
    message.channel.send(embed);
};
