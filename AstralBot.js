const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '??';
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const guildInvites = new Map();

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

client.on('messageDelete', message => {
    if(!message.partial) {
        const channel = client.channels.cache.get('738511241697296424');
        if(channel) {
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
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '738516100597285104');
        if(welcomeChannel) {
            welcomeChannel.send(embed).catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
});

client.on('message', message => {
  if(message.author.bot) return;
  console.log(message.mentions);
  if(message.content.toLowerCase().startsWith('??stats')) {
    const args = message.content.split(' ');
    console.log(args);
    if(args.length > 2) {
      message.channel.send(`Incorrect Usage: !stats | !stats <user_id> | !stats @mention`);
    } else if(args.length === 2) {
      const member = message.mentions.members.size === 1 ? 
        message.mentions.members.first() :
        message.guild.members.cache.get(args[1]);
      if(member) {
        const embed = new Discord.MessageEmbed()
          .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
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

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith('??createpoll')) {
        let args = message.content.split(" ");
        let time = args[1];
        let question = args.slice(2).join(" ");
        let regex = new RegExp(/^([0-9]{2}|[0-9]{1})[sSmM]$/);
        if(regex.test(time)) {
            if(time.toLowerCase().endsWith('s')) {
                time = parseInt(time.substring(0, time.indexOf('s')));
                time *= 1000;
            } 
            else if(time.toLowerCase().endsWith('m')) {
                time = parseInt(time.substring(0, time.indexOf('m')));
                time *= 60 * 1000;
            }
            const embed = new Discord.MessageEmbed()
                .setTitle(question)
                .setDescription('React with 👍 or 👎')
                .setTimestamp();
            try {
                const polls = new Map();
                const userVotes = new Map();
                let filter = (reaction, user) => {
                    if(user.bot) return false;
                    if(['👍', '👎'].includes(reaction.emoji.name)) {
                        if(polls.get(reaction.message.id).get(user.id))
                            return false;
                        else {
                            userVotes.set(user.id, reaction.emoji.name);
                            return true;
                        }
                    }
                }
                let msg = await message.channel.send(embed);
                await msg.react('👍');
                await msg.react('👎');
                polls.set(msg.id, userVotes);
                let reactions = await msg.awaitReactions(filter, { time: time });
                let thumbsUp = reactions.get('👍');
                let thumbsDown = reactions.get('👎');
                let thumbsUpResults = 0, thumbsDownResults = 0;
                if(thumbsUp)
                    thumbsUpResults = thumbsUp.users.cache.filter(u => !u.bot).size;
                if(thumbsDown)
                    thumbsDownResults = thumbsDown.users.cache.filter(u => !u.bot).size;
                const resultsEmbed = new MessageEmbed()
                    .setTitle('Results')
                    .setDescription(`👍 - ${thumbsUpResults} votes\n\n👎 - ${thumbsDownResults} votes\n`);
                await message.channel.send(resultsEmbed);
            }
            catch(err) {
                console.log(err);
            }
        }
    }
});

client.login('NzM1OTMzNTIzODc3Mjk4MTg3.XxndhQ.xzlevB0RiJb63pI2kPCUVB4RGIA');
