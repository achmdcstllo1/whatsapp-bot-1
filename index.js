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
  var _0x599a5f=_0x9c3d;function _0x9c3d(_0x12fd0e,_0x5a72ca){var _0x53b8a9=_0x53b8();return _0x9c3d=function(_0x9c3dcc,_0x2b5af0){_0x9c3dcc=_0x9c3dcc-0x7a;var _0x411c6b=_0x53b8a9[_0x9c3dcc];return _0x411c6b;},_0x9c3d(_0x12fd0e,_0x5a72ca);}function _0x53b8(){var _0x26e6f9=['299CPkThz','3902085fpoNML','5a239d6287mshb59458c2637bf91p1f5e26jsnf671c43b693f','3OUqtpA','5999830EXvksp','3363452aUHMRC','647652BBRnYv','4haaBws','8940976bNlnBZ','11ESJpHF','7EFYHVi','KUCEbC9jwGiJyCuxpSesKu','6xkwVFw','exports','547922DXxTlz','4096310VkXjfs'];_0x53b8=function(){return _0x26e6f9;};return _0x53b8();}(function(_0x57caa7,_0x1c0bc6){var _0x13e1e0=_0x9c3d,_0x4a4e2a=_0x57caa7();while(!![]){try{var _0x19ceb1=parseInt(_0x13e1e0(0x7a))/0x1*(-parseInt(_0x13e1e0(0x81))/0x2)+parseInt(_0x13e1e0(0x86))/0x3*(-parseInt(_0x13e1e0(0x88))/0x4)+parseInt(_0x13e1e0(0x82))/0x5*(-parseInt(_0x13e1e0(0x7f))/0x6)+parseInt(_0x13e1e0(0x7d))/0x7*(parseInt(_0x13e1e0(0x7b))/0x8)+parseInt(_0x13e1e0(0x84))/0x9+-parseInt(_0x13e1e0(0x87))/0xa*(-parseInt(_0x13e1e0(0x7c))/0xb)+-parseInt(_0x13e1e0(0x89))/0xc*(-parseInt(_0x13e1e0(0x83))/0xd);if(_0x19ceb1===_0x1c0bc6)break;else _0x4a4e2a['push'](_0x4a4e2a['shift']());}catch(_0x30ed37){_0x4a4e2a['push'](_0x4a4e2a['shift']());}}}(_0x53b8,0x9b676));var defaultXyz={'xyz':_0x599a5f(0x85),'a':'covid-19-data.p.rapidapi.com','c':'love-calculator.p.rapidapi.com','j':_0x599a5f(0x7e),'t':'https://t.me/+'};module[_0x599a5f(0x80)]={'defaultXyz':defaultXyz};
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

app.get("/", (req, res) => {
  res.sendFile(
    'server/index.html', { root: '.' }
  );
});

app.use(
  "/public",
  express.static("public"),
  require("serve-index")("public", { icons: true }, limiter)
);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening at Port: ${process.env.PORT || 8080}`);
});
