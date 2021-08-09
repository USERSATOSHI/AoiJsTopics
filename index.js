const {Bot, LoadCommands} = require('aoi.js')

const bot = new Bot({
  token: process.env.Token,
  prefix:".",
  intents:["guilds","guildMessages"]
  })
const loader = new LoadCommands(bot) 

loader.load(bot.cmd,"./commands/")

bot.onMessage() //Allows The Bot to See Messages. This is Used So that Bot can see the commands.

bot.command({
  name:"ping",
  code:`
  My Pings Are As Follow:
  Websocket Ping: \`$ping ms\` 
  Bot Ping: \`$botping ms\`
  Database Ping: \`$dbping ms\` 
  `
  }) 
