exports.run = (client, message, args) => {
  if (
    !message.member.roles.cache.some((r) =>
      ["Administrator", "Moderator", process.env.STAFF_ROLE].includes(r.name)
    )
  )
    return message.reply("Sorry, you don't have permissions to use this!");
  const sayMessage = args.join(" ");
  message.delete().catch((O_o) => {});
  message.channel.send(sayMessage);
};
