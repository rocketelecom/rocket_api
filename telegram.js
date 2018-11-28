const TelegramBot = require('node-telegram-bot-api');

const token = '725307477:AAFVqmo-e-C33IQALag1WUrwHFi5foHjgJI';
const bot = new TelegramBot(token, { polling: true });


exports.reportar_cliente_off = function (req, res) {
    bot.sendMessage(727978256, req);
    bot.sendMessage(714251236, req);

};

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, "Bom dea !");
    bot.sendMessage(msg.chat.id, msg.chat.id + "registrado em breve !");
    
    //botResponse.sendMessage(msg.chatId,"Breve estara ativo !");
});


