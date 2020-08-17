module.exports ={
    name: 'fruits',
    description: 'FRUITS',
    async execute(message) {
        const prefixRegex = new RegExp(
            `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
        );
        if (!prefixRegex.test(message.content)) return;
        const [, matchedPrefix] = message.content.match(prefixRegex);
        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === "fruits") {
            try {
                await message.react("🍎");
                await message.react("🍊");
                await message.react("🍇");
            } catch (error) {
                console.error("One of the emojis failed to react.");
            }
        }
    }
}
