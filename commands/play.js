const { defaultXyz } = require('../index.js');
var axios = require("axios").default;

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/play?lagu=${args}&APIKEY=${defaultXyz.xteam}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(function (response) {
        var data = response.data
    	var title = data.judul;
        var thumb = data.thumbnail;
        var yt_link = data.source;
        var dl_link = data.link;
        msg.reply(`*${title}* \n\n*Thumb: *${thumb}\n\n*YT Link:* ${yt_link}\n\n*Download Link:* ${dl_link}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "play",
    description: "To search youtube videos.",
    command: "!play",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
