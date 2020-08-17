module.exports = {
    name: 'commands',
    description: 'List of the commands of the bot',
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
            .setTitle("Commands")
            .setDescription("List of all of my commands")
            .addFields(
                { name: "Help", value: "Send where to get help", inline: true },
                {
                    name: "Stats",
                    value: "Send your/someone stats or the server stats",
                    inline: true,
                },
                { name: "Say", value: "The bot will say what you write", inline: true },
                { name: "Purge", value: "Delete bulk messages", inline: true },
                {
                    name: "Socials",
                    value: "List all of the Astral Network Socials",
                    inline: true,
                },
                { name: "Kick", value: "Kick an User", inline: true },
                { name: "Ban", value: "Ban an User", inline: true }
            )
            .setTimestamp()
            .setFooter(
                `AstralBot ${process.env.VERSION} | Bot created by Italiano at Arch#1877`,
                "https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png"
            );

        if (command === "commands") {
            message.channel.send(embed);
        }
    }
}