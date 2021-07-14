const { Random } = require("something-random-on-discord")
const random = Random

module.exports = {
  name: "neko",
   category: "fun",
  description:  "Send random neko!",
run: async (client, message, args) => {

if(!message.channel.nsfw) return message.reply('channel must be nfsw or die');
   let data = await random.getNeko()
   message.channel.send(data)
}
}
