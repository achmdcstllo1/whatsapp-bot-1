const { defaultXyz } = require('../index.js');
var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/attp?file&text=${args}`;

    var options = {
        method: 'GET',
        url: url,
        responseType: 'arraybuffer'
    }

    axios.request(options).then(async function (response) {
        var data = response.data

        const media = new MessageMedia(
            data.mimetype, 
            Buffer.data
        );

        await client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true, 
            stickerAuthor: 'WWEBJS', 
            stickerName: 'My Sticker'
        });

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
