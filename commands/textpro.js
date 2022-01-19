const thiccysapi = require('@phaticusthiccy/open-apis');
const textpr = require('../textpro/textpros.json');
const { MessageMedia } = require('whatsapp-web.js');

function splitStr(str, separator) {
    // Function to split string
    var string = str.split(separator);
    return string;
}

const execute = async (client, msg, args) => {

    var splited = splitStr(args, '|');

    for (var i = 0; i <= textpr.length; i++) {
        if (splited[0] == textpr[i].name) {
            thiccysapi.textpro(textpr[i].url, splited[1])
            .then(async (data) => { 
              try { 
                  console.log(data)
              } catch(err) { 
                  console.log(err)
              } 
                const media = await MessageMedia.fromUrl(data);
                client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
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