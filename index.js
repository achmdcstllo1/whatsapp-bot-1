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
  });
  
  client.initialize();
  
  client.on('message', message => {
    console.log(message.body);
  });

  //---------------AI CHAT BOT------------------------
  var _0x3115d4=_0x4daa;function _0x4a80(){var _0x41832d=['Boy','```','78462VKfqBj','64jwKilD','catch','auto','waifu','2467388cDgDPJ','15032tZdRsH','6261258AnZnNj','187RuklwL','waifu-ai.p.rapidapi.com','Girl','error','then','reply','1105980taYysE','request','message','Girl\x20loves\x20Boy.','log','hasQuotedMsg','data','*AI\x20Chat\x20Bot\x20:*\x20```','3692976pmCHfb','xyz','POST','57627KSmNEV','5llgmHv','330CTIjul','64NRBhYw'];_0x4a80=function(){return _0x41832d;};return _0x4a80();}(function(_0x4ecf6a,_0x370c5d){var _0x3ecfdb=_0x4daa,_0x1cc4f7=_0x4ecf6a();while(!![]){try{var _0x4509bf=-parseInt(_0x3ecfdb(0x1a0))/0x1*(parseInt(_0x3ecfdb(0x1b6))/0x2)+parseInt(_0x3ecfdb(0x1b9))/0x3*(-parseInt(_0x3ecfdb(0x19b))/0x4)+-parseInt(_0x3ecfdb(0x1b4))/0x5*(-parseInt(_0x3ecfdb(0x1a1))/0x6)+-parseInt(_0x3ecfdb(0x19f))/0x7+-parseInt(_0x3ecfdb(0x1b0))/0x8+parseInt(_0x3ecfdb(0x1b3))/0x9*(-parseInt(_0x3ecfdb(0x1b5))/0xa)+-parseInt(_0x3ecfdb(0x1a2))/0xb*(-parseInt(_0x3ecfdb(0x1a8))/0xc);if(_0x4509bf===_0x370c5d)break;else _0x1cc4f7['push'](_0x1cc4f7['shift']());}catch(_0x5db949){_0x1cc4f7['push'](_0x1cc4f7['shift']());}}}(_0x4a80,0xa758f));function _0x4daa(_0x20615c,_0x4f493d){var _0x4a80cb=_0x4a80();return _0x4daa=function(_0x4daa80,_0x4b8f23){_0x4daa80=_0x4daa80-0x19b;var _0x29d6d0=_0x4a80cb[_0x4daa80];return _0x29d6d0;},_0x4daa(_0x20615c,_0x4f493d);}config['ai_chat_enabled']==!![]&&client['on'](_0x3115d4(0x1aa),_0x58b001=>{var _0x45fbad=_0x3115d4;if(_0x58b001[_0x45fbad(0x1ad)]==!![]){var _0x539c46=_0x58b001['body'];console[_0x45fbad(0x1ac)](_0x539c46);var _0x3c56ac={'method':_0x45fbad(0x1b2),'url':'https://waifu-ai.p.rapidapi.com/path','headers':{'content-type':'application/x-www-form-urlencoded','x-rapidapi-host':_0x45fbad(0x1a3),'x-rapidapi-key':defaultXyz[_0x45fbad(0x1b1)]},'data':{'message':''+_0x539c46,'user_id':'9fa832g79fh2398h','from_name':_0x45fbad(0x1b7),'to_name':_0x45fbad(0x1a4),'situation':_0x45fbad(0x1ab),'preset_mode':_0x45fbad(0x19e),'translate_from':_0x45fbad(0x19d)}};axios[_0x45fbad(0x1a9)](_0x3c56ac)[_0x45fbad(0x1a6)](function(_0xde460b){var _0x573d65=_0x45fbad;console[_0x573d65(0x1ac)](_0xde460b[_0x573d65(0x1ae)]),_0x58b001[_0x573d65(0x1a7)](_0x573d65(0x1af)+_0xde460b[_0x573d65(0x1ae)]+_0x573d65(0x1b8));})[_0x45fbad(0x19c)](function(_0x58745a){var _0x1d9c5e=_0x45fbad;console[_0x1d9c5e(0x1a5)](_0x58745a);});}});
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