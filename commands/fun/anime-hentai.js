const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "hentai-anime",
  category: "nsfw",
description: "Sends a random image/gif of a cumsluts",
usage: "[command]",
run: async (client, message, args, level) => {
    
    if (!message.channel.nsfw) return message.channel.send('This is anime hentai and need nfsw channel!')
    
//command
superagent.get('https://nekos.life/api/v2/img/cum')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cumsluts")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
