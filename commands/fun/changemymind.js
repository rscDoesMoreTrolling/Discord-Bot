const canva = require('canvacord');
const Discord = require('discord.js');
const { changemymind } = require('canvacord');

module.exports = {
    name: "changemymind",
    description: "Trigegr yourself",


    async run (client, message, args) {

        let text = args.join(" ");

        if(!args[0]) return message.channel.send('Provide a valid HEX code (#FF0000)');

        let image = await canva.changemymind(text);

        let changeMyMind = new Discord.MessageAttachment(image, "cmm.png")

        message.channel.send(changeMyMind);
    }
}