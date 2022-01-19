const { defaultXyz } = require('../index.js');
var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/attp?file&text=${args}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(async function (response) {
        var data = response.data
        await client.sendMessage(msg.from, new MessageMedia(data.mimetype, data.data, data.filename), { sendMediaAsSticker: true, stickerAuthor: 'Fazil-vk', stickerName: 'Elsa wa-bot'});
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Error occured" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "!attp",
    description: "Text to sticker",
    command: "!attp",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
