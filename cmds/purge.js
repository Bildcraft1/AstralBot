exports.run = async (client, message, args) => {
  if (
    !message.member.roles.cache.some((r) =>
      ["Administrator", "Moderator", process.env.STAFF_ROLE].includes(r.name)
    )
  )
    return message.reply("Sorry, you don't have permissions to use this!");
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply(
      "Please provide a number between 2 and 100 for the number of messages to delete"
    );
  const fetched = await message.channel.messages.fetch({
    limit: deleteCount,
  });
  message.channel
    .bulkDelete(fetched)
    .catch((error) =>
      message.reply(`Couldn't delete messages because of: ${error}`)
    );
};
