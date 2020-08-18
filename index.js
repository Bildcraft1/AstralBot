const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const guildInvites = new Map();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./cmds/${file}`);
  client.commands.set(command.name, command);
}

//Start-Up
client.on("ready", () => {
  console.log("========AstralNetwork Bot========");
  console.log("=======By Italiano at Arch=======");
  console.log(`Logged in with ${client.user.tag}!`);
  client.user.setActivity(
    `AstralNetwork Bot ${process.env.VERSION} | ?? or ping me`
  );
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./cmds/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./cmds/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.BOT_TOKEN);
