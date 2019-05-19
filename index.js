const { Bot, Keyboard } = require('node-vk-bot');
const flipCoin = require('./flip-coin');
const util = require('util');

const bot = new Bot({
    token: 'token',
    group_id: 777
}).start();

console.log('Bot started!');

bot.get(/монет[куа]/i, (message, exec, reply) => {
    const flipResult = flipCoin();
    reply(`Я подкинул монету и результат: ${flipResult}`);
})

bot.get(/./i, (message, exec, reply) => {
    reply('Ваще топ!')
})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
      `(${util.inspect(error, false, 8, true)})`)
})
