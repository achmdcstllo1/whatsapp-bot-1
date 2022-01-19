
var social_commands = `*🔍 !insta <username> :* _To grt information about given username!. send \`\`\`!insta [username]\`\`\`
*🔍 !ytd <url> :* _To download youtube video. send \`\`\`!ytd [url]\`\`\`
*🔍 !ytmp3 <url> :* _To download youtube video as mp3. send \`\`\`!ytmp3 [url]\`\`\`
*🔍 !play <url> :* _To search youtube video. send \`\`\`!play [url]\`\`\`
*🔍 !instadl <url> :* _To download instagram video. send \`\`\`!instadl [url]\`\`\``;

var sticker_cmds = `*🌟 !sticker :* _Generates sticker from image. use !help sticker for more info._` ;

var general_cmds = `*🪄 !covid <country> :* _Get covid-19 stats of a country. use \`\`\`!help covid\`\`\` for more information._
*🪄 !help :* _Goto Menu._
*🪄 !help <command> :* _Get help about a specific command._
*🪄 !ping :* _Check the connection speed._
*🪄 !quote :* _Get a random quote._
*🪄 !weather <city> :* _Get weather of a city._
*🪄 !tts <text> :* _Convert text to speech._
*🪄 !udic <text> :* _Get Urban Dictionary Definition._`;

var admin_cmds = `*🐉 !everyone :* _For mention all the members of the group._
*🐉 !mute :* _To mute a chat._
*🐉 !unmute :* _To unmute a muted chat._
*🐉 !block <username> :* _To block a user._`;

var random_cmds = `*😸 !catfact :* _Get a random cat fact._
*🪁 !joke :* _Get a random joke._`;

module.exports = {
    s_cmds : social_commands,
    st_cmds : sticker_cmds,
    g_cmds : general_cmds,
    a_cmds : admin_cmds,
    r_cmds : random_cmds,
    };