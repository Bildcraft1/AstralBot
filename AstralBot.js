const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '??';
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.on('ready', () => {
    console.log('========AstralNetwork Bot========');
    console.log('=======By Italiano at Arch=======');
    console.log(`Logged in with ${client.user.tag}!`);
    client.user.setActivity(`AstralNetwork Bot v1.0 | ?? or ping me`);
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.channel.send('For support go in the <#641348069178343434> channel');
    } else if (command === 'prefix') {
        message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'avatar') {
        message.reply(message.author.displayAvatarURL());
    } else if (command === 'prefix') {
        message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
    }
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'say') {
        if (!message.member.roles.cache.some(r => ["Administrator", "Moderator", "Staff"].includes(r.name)))
           return message.reply("Sorry, you don't have permissions to use this!");
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        message.channel.send(sayMessage);
    }
});

client.on('message', async message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "purge") {
        if (!message.member.roles.cache.some(r => ["Administrator", "Moderator", "Staff"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const commands = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Commands')
        .setDescription('List of all of my commands')
        .addFields(
            { name: 'Help', value: 'Send where to get help', inline: true },
            { name: 'Avatar', value: 'Send your/someone avatar image', inline: true },
            { name: 'Say', value: 'The bot will say what you write', inline: true },
            { name: 'Purge', value: 'Delete bulk messages', inline: true },
	    { name: 'Socials', value: 'List all of the Astral Network Socials', inline: true},
        )
        .setTimestamp()
        .setFooter('AstralBot v1.0 | Bot created by Italiano at Arch#1877', 'https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png');

    if (command === 'commands') {
        message.channel.send(commands);
    }
});

client.on('message', async message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'fruits') {
        try {
            await message.react('🍎');
            await message.react('🍊');
            await message.react('🍇');
        } catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const socials = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Socials')
        .setDescription('List of all of AstralNetwork Socials')
        .addFields(
            { name: 'Discord', value: `Use command 'invite'`, inline: true },
            { name: 'Minecraft', value: `mc.astral-network.net`, inline: true },
            { name: 'Telegram', value: `Use command 'telegram'`, inline: true },
            { name: 'Website', value: `https://www.astral-network.net`, inline: true },
        )
        .setTimestamp()
        .setFooter('AstralBot v1.0', 'https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png');

    if (command === 'socials') {
        message.channel.send(socials);
    }
    if (command === 'invite') {
        message.channel.send('https://discord.gg/td2PUSn')
    }
    if (command === 'telegram') {
        message.channel.send('https://t.me/AstralNetworkOfficial')
    }
});


client.login('NzM1OTMzNTIzODc3Mjk4MTg3.XxndhQ.xzlevB0RiJb63pI2kPCUVB4RGIA');
