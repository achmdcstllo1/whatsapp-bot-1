const execute = async (client, msg) => {
    msg.reply("```" + "Hi Bro, I am alive." + "```");
  };
  
  module.exports = {
    name: "hello",
    description: "To check bot is alive !",
    command: "!hello",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };