const { defaultXyz } = require('../index.js');
var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/ytmp3?url=${args}&APIKEY=${defaultXyz.xteam}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options)
    .then(async function (response) {
        var data = response.data
    	var title = data.judul;
        var thumb = data.thumbnail;
        var link = data.url;
        var message = `*${title}* \n\n*YT Link:* ${link}\n\n*© Elsa Wa-Bot*`;
        const media = await MessageMedia.fromUrl(thumb);
        client.sendMessage(msg.from, media, {caption: message});
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "ytmp3",
    description: "To download YouTube videos as Audio.",
    command: "!ytmp3",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
