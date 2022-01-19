const { defaultXyz } = require('../index.js');
var axios = require("axios").default;

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/shorturl/bitly?url=${args}&APIKEY=${defaultXyz.xteam}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(function (response) {
        var data = response.data
        var s_link = data.result.link;
        msg.reply(`*Shorted Link:* ${s_link}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "ibitly",
    description: "To short a link.",
    command: "!bitly <url>",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
