const Discord = require('discord.js')

const configs = require('./configs')
const hates = require('./assets/hates')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.user.setPresence({ game: { name: 'Hate Maker' } })
})

bot.on('message', msg => {
  if (msg.content === '!marcao') {
    msg.reply(hates[Math.round(Math.random() * hates.length)])
  }
})

bot.login(configs.bot.key)
