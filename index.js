 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */

  const fs = require('fs');
  const { Client, List } = require('whatsapp-web.js');
  const express = require("express");
  const app = express();
  const qrcode = require('qrcode-terminal');
  var axios = require("axios").default;
  var tele = 'Zq6svi5bZj5mNTE9';
  var link = "https://chat.whatsapp.com/";
  const config = require("./config");
  var btncmd = require("./commands/btncmds.js");

  
  const SESSION_FILE_PATH = './session.json';
  
  let sessionData;
  if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
  }
  
  const client = new Client({
    session: sessionData || config.session,
    puppeteer: { headless: true, args: ['--no-sandbox'], },
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
    qrcode.generate(qr, { small: true });
  });
  //default xyz
  function _0x3802(){var _0x5af482=['3748QjxizY','Elsa\x20Wa-Bot','https://t.me/+','304765feqZGn','38577vAEOEq','1299berwlh','10mShlGj','love-calculator.p.rapidapi.com','261984BfiJIS','covid-19-data.p.rapidapi.com','66Jyjygh','596467awTemJ','exports','2591444wUangA','Fazil\x20vk','10826667jpioBx','1792IIAYAu','5a239d6287mshb59458c2637bf91p1f5e26jsnf671c43b693f','KUCEbC9jwGiJyCuxpSesKu','506vZameN'];_0x3802=function(){return _0x5af482;};return _0x3802();}var _0x68db31=_0x38ce;function _0x38ce(_0x2369cf,_0x476f64){var _0x380200=_0x3802();return _0x38ce=function(_0x38ce22,_0x5ab11d){_0x38ce22=_0x38ce22-0x19a;var _0x363519=_0x380200[_0x38ce22];return _0x363519;},_0x38ce(_0x2369cf,_0x476f64);}(function(_0x2b9d77,_0x4b3045){var _0x5275d5=_0x38ce,_0x1c0546=_0x2b9d77();while(!![]){try{var _0x17722d=-parseInt(_0x5275d5(0x1ac))/0x1+parseInt(_0x5275d5(0x19a))/0x2+-parseInt(_0x5275d5(0x1a6))/0x3*(-parseInt(_0x5275d5(0x1a1))/0x4)+-parseInt(_0x5275d5(0x1a4))/0x5*(-parseInt(_0x5275d5(0x1ab))/0x6)+-parseInt(_0x5275d5(0x1a5))/0x7*(parseInt(_0x5275d5(0x19d))/0x8)+parseInt(_0x5275d5(0x19c))/0x9*(parseInt(_0x5275d5(0x1a7))/0xa)+-parseInt(_0x5275d5(0x1a0))/0xb*(parseInt(_0x5275d5(0x1a9))/0xc);if(_0x17722d===_0x4b3045)break;else _0x1c0546['push'](_0x1c0546['shift']());}catch(_0x352bc0){_0x1c0546['push'](_0x1c0546['shift']());}}}(_0x3802,0xb4966));var defaultXyz={'xyz':_0x68db31(0x19e),'a':_0x68db31(0x1aa),'c':_0x68db31(0x1a8),'j':_0x68db31(0x19f),'t':_0x68db31(0x1a3),'author':_0x68db31(0x19b),'name':_0x68db31(0x1a2)};module[_0x68db31(0x1ad)]={'defaultXyz':defaultXyz};
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
    let info = client.info;
    let num = info['me']['user']+'@s.whatsapp.net';
    client.sendMessage(num,`*======Elsa Wa Bot======*\n\n*🎉 Bot started working*\n\n\`\`\`\Join Our WhatsApp Support Group :\`\`\`\n *${link}${defaultXyz.j}* \n\n\`\`\`\Telegram Suppport Group: \n ${defaultXyz.t}${tele} \`\`\`\n\n*===========💖==========*`)
  });
  
  client.initialize();
  
  client.on('message', message => {
    console.log(message.body);
  });

  //---------------AI CHAT BOT------------------------
  var _0x45ec54=_0x5622;(function(_0x3a937c,_0x34eddc){var _0x2a473c=_0x5622,_0xba07ed=_0x3a937c();while(!![]){try{var _0xb0accc=-parseInt(_0x2a473c(0x111))/0x1+-parseInt(_0x2a473c(0x115))/0x2*(parseInt(_0x2a473c(0x10a))/0x3)+parseInt(_0x2a473c(0x116))/0x4*(parseInt(_0x2a473c(0x10f))/0x5)+parseInt(_0x2a473c(0x114))/0x6+-parseInt(_0x2a473c(0x10b))/0x7+parseInt(_0x2a473c(0x112))/0x8+parseInt(_0x2a473c(0x10c))/0x9;if(_0xb0accc===_0x34eddc)break;else _0xba07ed['push'](_0xba07ed['shift']());}catch(_0xc7dc0){_0xba07ed['push'](_0xba07ed['shift']());}}}(_0x59f5,0xf0c8f));function _0x5622(_0x268804,_0x54ce12){var _0x59f5c6=_0x59f5();return _0x5622=function(_0x562214,_0xf56b5e){_0x562214=_0x562214-0x109;var _0x1f4770=_0x59f5c6[_0x562214];return _0x1f4770;},_0x5622(_0x268804,_0x54ce12);}var defaultXyz={'xyz':'5a239d6287mshb59458c2637bf91p1f5e26jsnf671c43b693f','a':_0x45ec54(0x10e),'c':_0x45ec54(0x113),'j':_0x45ec54(0x109),'t':'https://t.me/+','xteam':_0x45ec54(0x10d)};module[_0x45ec54(0x110)]={'defaultXyz':defaultXyz};function _0x59f5(){var _0x4ce744=['2ZLarjw','4076wZGuMx','KUCEbC9jwGiJyCuxpSesKu','5878617LDGkHF','7460467Crwnzn','30576870hUUphj','929f45250da82b63','covid-19-data.p.rapidapi.com','1145DsNrkQ','exports','1691948GvJXuw','5363448JZkfHa','love-calculator.p.rapidapi.com','8413866VcEcXb'];_0x59f5=function(){return _0x4ce744;};return _0x59f5();}
  //--------------------------------------------------

client.on('message', message => {
  if (message.body === 'Hi') {
    message.reply('Hi 👋🏻, send ```!help``` for More');
  }
});

client.on('message', message => {
  let info = client.info;
  let name = info['pushname'];
  let num = '@' + info['me']['user'];
  let about = `_Author:_ *Fazil-vk*\n_Bot Admin:_ *${name}*\n   ${num}\n_Github:_ *https://github.com/Fazil-vk/whatsapp-bot*\n_Version:_ *3.0.0*\n_Language:_ *Node.js*\n_Library:_ *Whatsapp-web.js*`;
  if (message.body === 'About') {
    client.sendMessage(message.from, about);
  }
});

client.on('message', message => {
  let sections = [{ title: 'Categories', rows: [{ title: 'General' }, { title: 'Social Media' }, { title: 'Sticker' }, { title: 'Admin' }, { title: 'Random' }] }];
  let list = new List('\n```Commands by Category.\nYou can choose category from below selection buttons```', 'Elsa Wa-Bot', sections, '*Elsa Wa-Bot*', 'footer');
  if (message.body === 'Commands') {
    client.sendMessage(message.from, list); 
  }
});

client.on('message', message => {
  if (message.body === 'Social Media') {
    message.reply(btncmd.s_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Sticker') {
    message.reply(btncmd.st_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Admin') {
    message.reply(btncmd.a_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'General') {
    message.reply(btncmd.g_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Random') {
    message.reply(btncmd.r_cmds);
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
        msg.from,
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

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter =  RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 100
});

app.use(limiter);

app.get("/", (req, res) => {
  res.sendFile(
    'server/index.html', { root: '.' }
  );
});

app.use(
  "/public",
  express.static("public"),
  require("serve-index")("public", { icons: true })
);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening at Port: ${process.env.PORT || 8080}`);
});
