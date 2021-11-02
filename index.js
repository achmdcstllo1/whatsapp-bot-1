const fs = require('fs');
const { Client } = require('whatsapp-web.js');
const express = require("express");
const app = express();
const qrcode = require('qrcode-terminal');
const config = require("./config");

const SESSION_FILE_PATH = './session.json';

let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
    session: sessionData || session: config.session,
    puppeteer: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    }
});

client.commands = new Map();

fs.readdir("./commands", (err, files) => {
  if (err) return console.error(e);
  files.forEach((commandFile) => {
    if (commandFile.endsWith(".js")) {
      let commandName = commandFile.replace(".js", "");
      const command = require(`./commands/${commandName}`);
      client.commands.set(commandName, command);
    }
  });
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

client.on("auth_failure", () => {
    console.error(
      "There is a problem in authentication, please delete session.json file and try again."
    );
  });

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('```pong```');
	}
});

client.on('message', message => {
	if(message.body === 'Hi') {
		message.reply('Hi 👋🏻, send ```!help``` for More');
	}
});

client.on("message_create", async (msg) => {

  if (msg.from && msg.body.startsWith("!")) {
      let args = msg.body.slice(1).trim().split(/ +/g);
      let command = args.shift().toLowerCase();

      console.log({ command, args });

      if (client.commands.has(command)) {
        try {
          await client.commands.get(command).execute(client, msg, args);
        } catch (error) {
          console.log(error);
        }
      } else {
        await client.sendMessage(
          msg.to,
          "No such command found. Type !help to get the list of available commands"
        );
      }
    }
});

client.on("message_revoke_everyone", async (after, before) => {
  if (before) {
    if (
      before.fromMe !== true &&
      before.hasMedia !== true &&
      before.author == undefined &&
      config.enable_delete_alert == "true"
    ) {
      client.sendMessage(
        before.from,
        "_You deleted this message_ 👇👇\n\n" + before.body
      );
    }
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});
