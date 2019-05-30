const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const util = require('util');

const bot = new Bot({
    token: 'твой_токен',
    group_id: 777
}).start();

console.log('Bot started!');

bot.get(/./i, (message, exec, reply) => {
    
    reply('Это всё что я могу делать - отвечать вот этим текстом!').catch(e => console.error(e));
})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
        `(${util.inspect(error, false, 8, true)})`)
})
