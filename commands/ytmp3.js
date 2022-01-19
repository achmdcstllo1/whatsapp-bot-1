const { defaultXyz } = require('../index.js');
var axios = require("axios").default;

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/ytmp3?url=${args}&APIKEY=${defaultXyz.xteam}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(function (response) {
        var data = response.data
    	var title = data.judul;
        var thumb = data.thumbnail;
        var link = data.link;
        const media = MessageMedia.fromUrl(thumb);
        client.sendMessage(msg.from, media, {caption: 'here\'s my media'})
        msg.reply(`*${title}* \n\n*Thumb: *${thumb}\n\n*YT Link:* ${link}\n\n*© Elsa Wa-Bot*`);
        client.MessageMedia(msg.channel, link);
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
