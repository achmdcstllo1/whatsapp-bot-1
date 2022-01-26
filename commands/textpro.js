 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const thiccysapi = require('@phaticusthiccy/open-apis');
const textpr = require('../textpro/textpros.json');
const { MessageMedia } = require('whatsapp-web.js');

function splitStr(str, separator) {
    var string = str.split(separator);
    return string;
}

const execute = async (client, msg, args) => {

    var str = `${args}`;
    var separator = "|";
    var splitted = splitStr(str, separator);
    console.log(splitted);

    for (var i = 0; i < textpr.length; i++) {
        if (splitted[0] == textpr[i].name) {
            thiccysapi.textpro(textpr[i].url, splitted[1])
            .then(async (data) => { 
                const media = await MessageMedia.fromUrl(link);
                client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
              try { 
                  console.log(data);
                  link = data
              } catch(err) { 
                  console.error(err)
                  msg.reply("```" + "Error occured" + "```");
                  throw err;
              } 
            });
        }
    }
    
}

module.exports = {
    name: "textpro",
    description: "To create beautiful text images",
    command: "!textpro <textpro name>|<text>",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };