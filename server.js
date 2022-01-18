const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

let sessionData;

const client = new Client({
    session: sessionData
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', (session) => {
    sessionData = session;
    console.log(JSON.stringify(session));
});

client.on('ready', () => {
    console.log('Copy this and past on Heroku Session or Railway Session!');
});

client.initialize();
