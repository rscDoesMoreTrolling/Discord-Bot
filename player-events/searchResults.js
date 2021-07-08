const MessageEmbed = require('discord.js');
module.exports = (client, message, query, tracks) => {
    const embed = new MessageEmbed()
    .setTitle(`Here are your search result for ${query}`)
    .setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`)
    .setTimestamp()
    .setFooter(`Create by NekoIceCream`)
    .setColor('BLUE');
    message.channel.send(embed);


};
