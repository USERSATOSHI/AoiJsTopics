const {Bot} = require('aoi.js')

const DbdtsDb = require('dbdts.db')

const bot = new Bot({
  token: process.env.Token,
  prefix:".",
  intents:["guilds","guildMessages"],
  database:{
    type:"dbdts.db",
    db: DbdtsDb,
    path:"./database/",
    tables:["main"]
  }
  })

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
