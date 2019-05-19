# Пилим бота на JS 🛠
Привет, тут рассказано как сделать quest-like game на JS с помощью чат-бота.

# test

## Установка JS
Прежде всего тебе понадобится ноут и на него нужно поставить необходимый софт.

Скачиваем [Node JS](https://nodejs.org/en/)
![node-js](https://pp.userapi.com/c853528/v853528007/45c22/s65geLWzOlc.jpg "та самая кнопка")
И устанавливаем. Перезагрузись после установки!

Чтобы убедится что всё установлилось, открой командную строку и напиши там `npm -v`
![npm-execute](https://pp.userapi.com/c852236/v852236721/1244e6/VPVJYUP4IgY.jpg "Версия пакетного менеджера")
Если в ответ ты увидел версию, то всё отлично!


## Следующий шаг - это подготовка группы

10 шагов к успеху :D

1. Заходим в вк и создаём там сообщество. Имя и картинка и прочие поля нас не интересуют, так что заполняй по желанию.
2. Заходим в настройки => работа с API. Жмём создать ключ ![create-key](https://pp.userapi.com/c853528/v853528007/45c43/AC_fNhP01uU.jpg "Да, вот эта кнопка!")
3. Отмечаем там все галочки и жмём **создать** ![checkbox](https://pp.userapi.com/c853528/v853528007/45c4c/1i9EUcWVBcU.jpg "Если нажать не все галочки, то бот не будет работать")
4. <a id="token"></a>После, **сохраняем** созданный ключ куда-нибудь в файлик txt ![api-key](https://pp.userapi.com/c853528/v853528007/45c56/UmxxDpEfONQ.jpg "Береги этот ключ!")
5. Заходим в раздел **Long Poll API** и включаем его. Ставь версию **5.80** ![version-api](https://pp.userapi.com/c852236/v852236721/1244bb/GsDOvdcxRvE.jpg "На самом деле будет работать и с последней версией, но... кто тестировал?)")
6. Теперь подписываемся на события - чтобы бот мог получать сообшения. ![events](https://pp.userapi.com/c852236/v852236721/1244c4/QRA72V6bSZ0.jpg "Да, все галочки обязательны!")
7. Включаем возможность писать нашему боту. В настройках сообщества заходим в **сообщения** ![msg](https://pp.userapi.com/c852236/v852236721/1244cd/hu-HX0wM4IQ.jpg "Нажми кнопку СОХРАНИТЬ")
8. Спускаемся в подраздел **Настройки для бота** и включаем там возможности ботов ![save-btn](https://pp.userapi.com/c852236/v852236721/1244d6/3ultVaAMbh0.jpg "Еще одна кнопка сохранить 😅")
9. <a id="id"></a>Теперь нужно получить ID сообщества. Его можно взять в главных настройках. **Сохрани** его тоже в файлик ![get-id](https://pp.userapi.com/c852236/v852236721/1244df/Tfp2i_G8wmc.jpg "Да, его тоже нужно скопировать куда-то")

## А теперь пора запустить бота 🔥
Код удобнее писать в [Visual Studio Code](https://code.visualstudio.com/)

1. Открываем папку с этим проектом на компьютере. Открываем этот проект в VS Code ![vs-code](https://pp.userapi.com/c852236/v852236721/124575/IjgHhD5xLUM.jpg "Web Strom конечно тоже ничего такой :) ")
2. Открываем файл **index.js** И вставляем [токен](..#token) и ID группы в файл бота. ![insert](https://pp.userapi.com/c852236/v852236721/124562/kK0uIK7TLe0.jpg "Ты же их сохранил, да?")