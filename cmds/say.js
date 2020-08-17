module.exports = {
    name: 'say',
    description: 'The bot repeats user input',
    execute(message) {
        const prefixRegex = new RegExp(
            `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
        );
        if (!prefixRegex.test(message.content)) return;
        const [, matchedPrefix] = message.content.match(prefixRegex);
        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === "say") {
            if (
                !message.member.roles.cache.some((r) =>
                    ["Administrator", "Moderator", process.env.STAFF_ROLE].includes(r.name)
                )
            )
                return message.reply("Sorry, you don't have permissions to use this!");
            const sayMessage = args.join(" ");
            message.delete().catch((O_o) => {});
            message.channel.send(sayMessage);
        }
    }
}