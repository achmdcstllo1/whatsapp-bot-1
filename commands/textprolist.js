const textpr = require('../textpro/textpros.json');
const execute = async (client, msg, args) => {
    var list = [];
    for(var i = 0; i < textpr.length; i++) {
        var num = textpr[i].name + " - " + textpr[i].description;
        list.push(num);
    }
    await msg.reply("*Available textpros:*\n\n" + list.replace(/ *, */g, '\n\n') + "\n\n*©️ Elsa Wa-Bot*");

}

module.exports = {
    name: "textprolist",
    description: "To grt the list of Textpros",
    command: "!textprolist",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };