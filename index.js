const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const flipCoin = require('./flip-coin');
const util = require('util');
const steps = require('./steps');

const bot = new Bot({
    token: 'cc50ae5dc2a999cab12a1ffd361488ff76ff5bb4c514110f9d784f801bb4b11f6278049681e56adb1756c',
    group_id: 182498044
}).start();

console.log('Bot started!');

bot.get(/./i, (message, exec, reply) => {
    var info = message.payload && steps[JSON.parse(message.payload)] || steps['']; //!!!

    let keyboard = new Keyboard(true)

    for (var i = 0; i < info.btns.length; ++i) {
        if (!(i % 2) && i) keyboard.addRow()
        keyboard.addButton(info.btns[i].msg, KeyboardColor.PRIMARY, JSON.stringify(info.btns[i].next))
    }
    reply(info.question, { keyboard }).catch(e => console.error(e));
    //bot.send(info.question, message.peer_id, keyboard.obj).catch(e => console.error(e))

})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
        `(${util.inspect(error, false, 8, true)})`)
})
