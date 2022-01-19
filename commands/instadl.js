const { defaultXyz } = require('../index.js');
var axios = require("axios").default;

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/igv2?url=${args}&APIKEY=${defaultXyz.xteam}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(function (response) {
        var data = response.data
        var dl_link = data.result.url[0]['url'];
        msg.reply(`*Download Link:* ${dl_link}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "instadl",
    description: "Download instagram videos.",
    command: "!instadl",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
