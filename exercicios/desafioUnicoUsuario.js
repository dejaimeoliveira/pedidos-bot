// Ao seu dispor, mestre!
// Sinto muito, mas eu só falo com o meu mestre

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
console.log(meu_id)

/*
bot.start(ctx => {
    if(ctx.update.message.from.id == meu_id) {
        ctx.reply('Ao seu dispor, mestre!')
    } else {
        ctx.reply('Sinto muito, mas eu só falo com o meu mestre!')
    }
})

bot.startPolling()*/