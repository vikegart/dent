module.exports = steps = {
    '': {
        question: `Ты глава космической фермы! 🚀 \n
                Тебе предстоит принимать решения, от которых будет зависеть
                судьба твоего поселения! \n
                
                Поехали?`,
        btns: [
            { msg: 'Даааа!', next: 'cat-0' },
        ]
    },
    'cat-0': {
        question: `
                На тебя напали котики-енотики, что будешь делать?`,
        btns: [
            { msg: 'Погладить их', next: 'cat-1' },
            { msg: 'Защититься', next: 'cat-2' },
            { msg: 'Сфоткать их и выложить в инстаграмм', next: 'cat-3' },
        ]
    },
    'cat-1': {
        question: "Тебе откусили руку и ты проиграл!",
        btns: [
            { msg: 'Начать заново', next: '' },
        ]
    },
    'cat-2': {
        question: `Норм! Играем дальше \n
                 Жители предлагают посторить космический корабль, сторим?`,
        btns: [
            { msg: 'ДА!', next: 'space-1' },
            { msg: 'Забить', next: 'space-2' },
            { msg: 'Построить космическую лодку!', next: 'space-3' },
        ]
    },
    'cat-3': {
        question: `Твоё фото набрало кучу лайков и из космоса прилетели на тебя посмотреть! \n
                 \n
                 Так погодитека, это же Танос`,
        btns: [
            { msg: 'Круто! Сделаю с ним селфи', next: 'tanos-1' },
            { msg: 'Щелкнуть первым', next: 'tanos-2' },
            { msg: 'Посмотреть чо будет', next: 'tanos-3' },
        ]
    },
    'tanos-1': {
        question: `Твоё фото СНОВА набрало кучу лайков \n
                 Теперь тебя все боятся и ты - гроза Вселенной 😎`,
        btns: [
            { msg: 'Начать заново', next: '' },
        ]
    },
    'tanos-2': {
        question: `Танос не оценил шутку и стер всё население твоей фермы и тебя \n
                 Грустно...`,
        btns: [
            { msg: 'Начать заново', next: '' },
        ]
    },
    'tanos-3': {
        question: `Он щелкает пальцами 🤞: ты выжил, но вот половина вселенной - нет. Какой в этом смысл? Это поражение...`,
        btns: [
            { msg: 'Начать заново', next: '' },
        ]
    },
    'space-1': {
        question: `Бюджет попилили... Корабль не построили... \n
               Может еще разок попытаться?`,
        btns: [
            { msg: 'ДА!', next: 'cat-2' },
            { msg: 'Начать игру заново', next: '' },
        ]
    },
    'space-2': {
        question: `Норм тема! \n
               Но вот вот снова нашествие...`,
        btns: [
            { msg: 'Нашествие...?', next: 'cat-0' },
        ]
    },
    'space-3': {
        question: `Ваша лодка готова, капитан ⛵ \n
               Ты выиграл!..`,
        btns: [
            { msg: 'Поиграть еще раз', next: '' },
        ]
    },

}