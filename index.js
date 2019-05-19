const { Bot, Keyboard } = require('node-vk-bot');
const flipCoin = require('./flip-coin');
const util = require('util');

const bot = new Bot({
    token: 'cc50ae5dc2a999cab12a1ffd361488ff76ff5bb4c514110f9d784f801bb4b11f6278049681e56adb1756c',
    group_id: 182498044
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
