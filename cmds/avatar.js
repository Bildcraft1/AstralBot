module.run = (client, message) => {
  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "avatar") {
    message.reply(message.author.displayAvatarURL());
  } else if (command === "prefix") {
    message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
  }
};
