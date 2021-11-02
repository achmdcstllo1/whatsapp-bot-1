const fs = require('fs');
const ytdl = require('ytdl-core');

const execute = async (client, msg, args) => {

    const random = (length = 8) => {
        return Math.random().toString(16).substr(2, length);
    };

    const name = random(4);

    const url = args;
    
    msg.reply('```📥 Downloading...```');
    ytdl(url, {quality: '18'})
  .pipe(fs.createWriteStream('./temp/'+name+'.mp4'));
    await client.sendMessage(msg.from, `\`\`\`Downloaded Successfully...\nsaved as ${name}\`\`\`\n\nType \`\`\`!ytu ${name}\`\`\` for Upload the video`);

}

module.exports = {
    name: "ytdl",
    description: "To download YouTube videos.",
    command: "!ytdl",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };