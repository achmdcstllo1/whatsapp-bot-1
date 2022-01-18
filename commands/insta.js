 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const instagram = require("user-instagram-profile");
 
const execute = async (client, msg, args) => {
    instagram(`https://www.instagram.com/${args}`)
    .then(data => {
      if(data.isPrivate == true) {
        var status = "Private"
      }else{
        var status = "Public"
      }
      if(data.isVerified == true) {
        var verified = "Verified"
      }else{
        var verified = "Not Verified"
      }
      var profile = data.avatarHD;
      var info = (`*_USER INFO:_*\n\n*Username:* ${data.username}\n\n*Full Name:* ${data.fullName}\n\n*Followers:* ${data.subscriberCount}\n\n*Following:* ${data.subscribtions}\n\n*Post Count:* ${data.postCount}\n\n*Status:* ${status}\n\n*Verified:* ${verified}\n\n*Bio:* ${data.bio}\n\n*Profile Pic:* ${profile}`)
      
      msg.reply(`${info}\n\n\n*© Elsa Wa-Bot*`);
    })
    .catch(e => {
      console.error(data)
      msg.reply("Account not found!");
    })
}

module.exports = {
  name: "insta",
  description: "To grt information about given username!. send ```!insta [username]```",
  command: "!insta",
  commandType: "plugin",
  isDependent: false,
  help: undefined,
  execute,
};