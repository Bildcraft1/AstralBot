const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const dashboard = require("discord-bot-dashboard");

//Start-Up
client.on("ready", () => {
  dashboard.run(client, {
    port: process.env.PORT,
    clientSecret: process.env.CLIENTSECRET,
    redirectURI: process.env.REDIRECTURI,
  });
  console.log("========AstralNetwork Bot========");
  console.log("=======By Italiano at Arch=======");
  console.log(`Logged in with ${client.user.tag}!`);
  client.user.setActivity(
    `AstralNetwork Bot ${process.env.VERSION} | ?? or ping me`
  );
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  client.commands = new Enmap();

  fs.readdir("./cmds/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let props = require(`./cmds/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });
});
client.login(process.env.BOT_TOKEN);
