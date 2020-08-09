const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '??';
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const guildInvites = new Map();
const Ver = 'v1.1'

client.on('ready', () => {
    console.log('========AstralNetwork Bot========');
    console.log('=======By Italiano at Arch=======');
    console.log(`Logged in with ${client.user.tag}!`);
    client.user.setActivity(`AstralNetwork Bot ${Ver} | ?? or ping me`);
});

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.channel.send('For support go in the <#641348069178343434> channel, if you want to see my commands do ??commands');
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
            { name: 'Stats', value: 'Send your/someone stats or the server stats', inline: true },
            { name: 'Say', value: 'The bot will say what you write', inline: true },
            { name: 'Purge', value: 'Delete bulk messages', inline: true },
            { name: 'Socials', value: 'List all of the Astral Network Socials', inline: true },
            { name: 'Kick', value: 'Kick an User', inline: true },
            { name: 'Ban', value: 'Ban an User', inline: true },
        )
        .setTimestamp()
        .setFooter(`AstralBot ${Ver} | Bot created by Italiano at Arch#1877`, 'https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png');

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
        .setFooter(`AstralBot ${Ver}`, 'https://cdn.discordapp.com/attachments/734824554546987159/734824886194667590/1590785879445.png');

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

client.on('messageDelete', message => {
    if (!message.partial) {
        const channel = client.channels.cache.get('739219291143929907');
        if (channel) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Deleted Message')
                .addField('Author', `${message.author.tag} (${message.author.id})`, true)
                .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
});

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
            .catch(err => console.log(err));
    });
});

client.on('guildMemberAdd', async member => {
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
        const embed = new Discord.MessageEmbed()
            .setDescription(`${member.user.tag} is the ${member.guild.memberCount} to join.\nJoined using ${usedInvite.inviter.tag}\nNumber of uses: ${usedInvite.uses}`)
            .setTimestamp()
            .setTitle(`${usedInvite.url}`);
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '739219322790215740');
        if (welcomeChannel) {
            welcomeChannel.send(embed).catch(err => console.log(err));
        }
    }
    catch (err) {
        console.log(err);
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    console.log(message.mentions);
    if (message.content.toLowerCase().startsWith('??stats')) {
        const args = message.content.split(' ');
        console.log(args);
        if (args.length > 2) {
            message.channel.send(`Incorrect Usage: !stats | !stats <user_id> | !stats @mention`);
        } else if (args.length === 2) {
            const member = message.mentions.members.size === 1 ?
                message.mentions.members.first() :
                message.guild.members.cache.get(args[1]);
            if (member) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`${member.nickname} (${member.id})`, member.user.displayAvatarURL())
                    .setThumbnail(member.user.displayAvatarURL())
                    .addField('Created On', member.user.createdAt.toLocaleString(), true)
                    .addField('Joined On', member.joinedAt, true)
                    .addField('Kickable', member.kickable, false)
                    .addField('Voice Channel', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'None')
                    .addField('Presence', member.presence.status)
                    .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`);
                message.channel.send(embed);
            } else {
                message.channel.send(`I couldn't find that member with ID ${args[1]}`);
            }

        } else {
            const { guild } = message;
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
                .setThumbnail(guild.iconURL())
                .addField('Created On', guild.createdAt.toLocaleString(), true)
                .addField('Guild Owner', guild.owner.user.tag)
                .addField('Total Members', guild.memberCount, true)
                .addField('Total Real Members', guild.members.cache.filter(member => !member.user.bot).size, true)
                .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size, true)
                .addField('Total Channels', guild.channels.cache.size, true)
                .addField('Total Text Channels', guild.channels.cache.filter(ch => ch.type === 'text').size, true)
                .addField('Total Voice Channels', guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
                .setColor('#5CC5FF')
                .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
            message.channel.send(embed);
        }
    }
});

client.on = async (client, message, args) => {
    if (message.content.toLowerCase().startsWith('??ban')) {
        try {
            const user = message.mentions.users.first()
            const settings = client.getSettings(message.guild.id)

            if (user) {
                const member = message.guild.member(user)
                if (member) {
                    member.ban(args.slice(1).join(' ')).then(() => {
                        message.reply('Successfully banned ${user.tag}!')

                        const modLogChannel = settings.modLogChannel
                        if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
                            const embed = new Discord.RichEmbed()
                                .setTitle('User Ban')
                                .setColor('#eeeeee')
                                .setDescription(`Name: ${user.username}\nID: ${user.id}\nReason: ${args.slice(1).join(' ')}\nModerator: ${message.author.username}`)

                            message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed)
                        }
                    }).catch(err => {
                        message.reply('I was unable to ban the user!')
                    })
                } else {
                    message.reply('That user isn\'t in this guild!')
                }
            } else {
                message.reply('You didn\'t mention the user to ban!')
            }
        } catch (err) {
            message.channel.send('There was an error!\n' + err + '').catch()
        }
    }
}

exports.conf = {
    enabled: true,
    aliases: ['b'],
    guildOnly: true,
    permLevel: 'Moderator'
}

client.on = async (client, message, args) => {
    if (message.content.toLowerCase().startsWith('??ban')) {
        try {
            const user = message.mentions.users.first()
            const settings = client.getSettings(message.guild.id)

            if (user) {
                const member = message.guild.member(user)
                if (member) {
                    member.kick(args.slice(1).join(' ')).then(() => {
                        message.reply(`Successfully kicked ${user.tag}`)

                        const modLogChannel = settings.modLogChannel
                        if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
                            const embed = new Discord.RichEmbed()
                                .setTitle('User Ban')
                                .setColor(colors.red)
                                .setDescription(`Name: ${user.username}\nID: ${user.id}\nReason: ${args.slice(1).join(' ')}\nModerator: ${message.author.username}`)

                            message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error)
                        }
                    }).catch(err => {
                        message.reply('I wasn\'t able to kick the member')
                    })
                } else {
                    message.reply('That user isn\'t in this guild!')
                }
            } else {
                message.reply('You didn\'t mention the user to kick!')
            }
        } catch (err) {
            message.channel.send('There was an error!\n' + err).catch()
        }
    }
}

client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'announce') {
        if (!message.member.roles.cache.some(r => ["Administrator", "Moderator", "Staff"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        client.channels.get("742104957636837447").send(sayMessage)
    }
});

client.login('NzM1OTMzNTIzODc3Mjk4MTg3.XxndhQ.xzlevB0RiJb63pI2kPCUVB4RGIA');
