const TelegramBotApi = require('node-telegram-bot-api')
const os = require('os')
const token = ''

const bot = new TelegramBotApi(token, { polling: true })
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  const text = msg.text
  console.log(msg);
  console.log(os.type());


  if (text === '/start') {
    return bot.sendMessage(chatId, `Привет ${msg.from.first_name}! Давай с играем? Напиши мне что нибудь, я тебе отвечу твоими словами) `)
  }
  if (text === 'да' || text === 'yes') {
    return bot.sendMessage(chatId, `Хорошо - давай еще одно словечко)`)
  }
  if (text === 'нет' || text === 'no') {
    return bot.sendMessage(chatId, `Сам ты - "${text}" Все обидел...`)
  }
  else {
    return bot.sendMessage(chatId, `"${text}" - это приличное слово?`)
  }


})