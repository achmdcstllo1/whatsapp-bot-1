const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
//const client = new Client();

let sessionData;

const client = new Client({
    session: sessionData
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', (session) => {
    sessionData = session;
    console.log(session);
});

client.on('ready', () => {
    console.log('Copy this and past on Heroku Session!');
});

client.initialize();
