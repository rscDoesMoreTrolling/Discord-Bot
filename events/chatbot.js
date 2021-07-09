const { chatBot } = require("reconlx");
const client = require("../index");
const schema = require("../models/chatbot-channel");
client.once("message", async (message) => {
    console.log("ChatBotworking");
    if (!message.guild || message.author.bot) return;
    schema.findOne({ Guild: message.guild.id}, async (err, data) => {
        if(!data) return message.channel.send("no data");
        if (message.channel.id !== data.Channel) return;
        chatBot(message, message.channel, message.author.id);
    });
});
