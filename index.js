var aoi = require('aoi.js')

var PA55WORD = process.env['PA55WORD']

var keepAlive = require('./keep_alive.js')

var bot = new aoi.Bot({
    token: PA55WORD,
    prefix: "p.",
    mobile: true,
    autoUpdate: true
})

bot.status({
    text: "Photoshop",
    type: "PLAYING",
    time: 30
})

bot.status({
    text: "p.help",
    type: "LISTENING",
    time: 30
})

bot.status({
  text: "$serverCount servers!",
  type: "COMPETING",
  time: 30
})

bot.onMessage()

bot.loadCommands(`./commands/`)

keepAlive()