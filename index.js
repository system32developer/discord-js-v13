const { Client, Intents, Collection, MessageEmbed, Util } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { token } = require(`${__dirname}/src/public/botconfig.json`);
const { comandos } = require(`${__dirname}/src/utils/handler/comandos.js`);
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);

comandos(fs, client, Collection)
eventos(fs, client, MessageEmbed, Util)

client.login(token);