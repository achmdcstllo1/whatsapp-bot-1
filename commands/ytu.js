const fs = require('fs');
const ytdl = require('ytdl-core');
const { MessageMedia } = require('whatsapp-web.js');
const  num = 1;

const execute = async (client, msg, args) => {

    if (num == 1) {
        try{
            await client.sendMessage(msg.from, MessageMedia.fromFilePath('./temp/'+args+'.mp4'), {caption: '*© Elsa Wa-Bot*'});
            fs.unlinkSync('./temp/'+args+'.mp4');
        }catch(e){
            await client.sendMessage(msg.from, MessageMedia.fromFilePath('./temp/'+args+'.mp4'), {caption: '*© Elsa Wa-Bot*'});
            fs.unlinkSync('./temp/'+args+'.mp4');
        }
    }
    

}

module.exports = {
    name: "ytu",
    description: "To upload",
    command: "!hi",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };