module.exports = (client, message) => {
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
  }