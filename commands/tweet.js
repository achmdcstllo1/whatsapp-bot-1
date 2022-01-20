var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

function splitStr(str, separator) {
    var string = str.split(separator);
    return string;
}

async function execute(client, msg, args) {
    
    var str = `${args}`;
    var separator = "|";
    var splitted = splitStr(str, separator);

    var url = `https://nekobot.xyz/api/imagegen?type=tweet&username=${splitted[0].replace(/ /g, '_')}&text=${splitted[1]}`;
    
    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(async function (response) {
        var data = response.data
        var link = data.message;
        const media = await MessageMedia.fromUrl(link);
        client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Error occured" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "tweet",
    description: "Download Facebook videos",
    command: "!tweet",
    commandType: "plugin",
    isDependent: false,
    help: 'Must type name and text.\n\nExample: !tweet fazil|How are you?',
    execute,
  };

