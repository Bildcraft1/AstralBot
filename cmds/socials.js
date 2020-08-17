module.exports = {
    name: 'socials',
    description: 'See Socials Links',
    execute(message) {
        const prefixRegex = new RegExp(
            `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
        );
        if (!prefixRegex.test(message.content)) return;
        const [, matchedPrefix] = message.content.match(prefixRegex);
        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
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

        if (command === "socials") {
            message.channel.send(embed);
        }
        if (command === "invite") {
            message.channel.send("https://discord.gg/td2PUSn");
        }
        if (command === "telegram") {
            message.channel.send("https://t.me/AstralNetworkOfficial");
        }
    }
}