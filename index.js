const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const flipCoin = require('./flip-coin');
const util = require('util');
const steps = require('./steps');
const path = require('path');

const bot = new Bot({
    token: 'vk1.a.nR1x2TGbH3AEmR85z9p_0JoVSbXPAjVWAtUX7ohZFTwCNs0ExZvG2bd3Kl63FZJnUw3weMkUmU23rSCfnJ5XaHEZefDc-WBWFpbK5hIeWddG-UMb8Xdl8_ggnJ5fxad1eoD1TJlQ0lXgeGDkpERw07fIyS9pNUwIQF8ZO3LEJg7l8uw7oY4DTf14qL_ll1fy',
    group_id: 174041696,
    api: {
        v: 5.82, // >= 5.80
        lang: 'ru'
      }
}).start();

console.log('Bot started!');

bot.get(/./i, (message, exec, reply) => {
    var info = message.payload && steps[JSON.parse(message.payload)] || steps['']; //!!!

    let keyboard = new Keyboard(true)

    for (var i = 0; i < info.btns.length; ++i) {
        if (i) keyboard.addRow();
        keyboard.addButton(info.btns[i].msg, KeyboardColor.PRIMARY, JSON.stringify(info.btns[i].next));
    }
    if (info.img){
        bot.uploadPhoto(path.join(__dirname, info.img))
            .then(photo => {
                reply(info.question, { keyboard, attachment: `photo${photo.owner_id}_${photo.id}` })
                    .catch(e => console.error(e)); 
            })
    } else {
        reply(info.question, { keyboard }).catch(e => console.error(e)); 
    }
})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
        `(${util.inspect(error, false, 8, true)})`)
})
