module.run = async (client, message, args) => {
  try {
    await message.react("🍎");
    await message.react("🍊");
    await message.react("🍇");
  } catch (error) {
    console.error("One of the emojis failed to react.");
  }
};
