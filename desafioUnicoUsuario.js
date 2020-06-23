const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    if (from.if = 377176122) {
      Ao seu DynamicsCompressorNode, mestre!
      else 
      Sinto muito, mas eu só falo com o meu mestre!
    }

    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.startPolling()

