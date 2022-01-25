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
            .then(async function (data) { 
              try { 
                  console.log(data);
                  link = data
                  try{
                    const media = await MessageMedia.fromUrl(link);
                    client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
                  }
                  catch(err){
                    console.log(err);
                    await msg.reply('*Image link:*\n' + link + '\n\n*©️ Elsa Wa-Bot*');
                  }
              } catch(err) { 
                  console.log(err)
                  msg.reply("```" + "Error occured" + "```");
              } 
            });
        }
        else{
            msg.reply("```Please check your Textpro name.```");
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