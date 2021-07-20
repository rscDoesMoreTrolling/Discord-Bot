const { client, message, MessageEmbed } = require('discord.js');
const schema = require('../../models/chatbot-channel');
module.exports = {
    name : 'set-chatbot',
    usage: "<msg>",
    description : 'chatting with me!',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(bot, message, args) => 
    {
        if(!message.member.permissions.has("ADMINISTRATOR")) 
        return message.channel.send("You dont have permission to use this command");
        const channel = message.mentions.channels.first() || message.channel;
        Schema.findOne({ Guild: message.guild.id}, async (err, data) => 
        {
            if (data) data.delete();
            new Schema({
                Guild: message.guild.id,
                Channel: channel.id,
            })
            .save();
            message.channel.send(`Saved chatbot channel to ${channel}`)
        });

    },
};
