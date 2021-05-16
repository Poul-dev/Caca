const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
    console.log('ready')
    bot.user.setActivity('revendre des cacas').catch(console.error)
})

bot.login('ODQzNDAwNDE1NDg3NTkwNDMw.YKDT2A.mwZ_bOxw9n-zqobReIGGurlAxV4')
