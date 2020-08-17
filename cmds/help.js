module.exports = {
    name: 'help',
    description: 'Show the Help',
    execute(message) {
        const prefixRegex = new RegExp(
            `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
        );
        if (!prefixRegex.test(message.content)) return;
        const [, matchedPrefix] = message.content.match(prefixRegex);
        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === "help") {
            message.channel.send(
                "For support go in the <#641348069178343434> channel, if you want to see my commands do ??commands"
            );
        } else if (command === "prefix") {
            message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
        }
    }
}
