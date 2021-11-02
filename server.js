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
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();