const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: false
})
const config = require('./config.json');
const { Player } = require('discord-player');
const player = new Player(client);
const { chatBot } = require("reconlx");
const Schema = require("../models/chatbot-channel");

client.player = player;
    fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});
const prefix = config.prefix
const db = require('quick.db')
const token = config.token
const mongoose = require('mongoose');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    console.log(`${client.user.username} ✅`)
client.user.setActivity(client.config.game);
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
    if(db.has(`afk.${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk.${message.author.id}+${message.guild.id}`)
        db.delete(`afk.${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
    if(message.mentions.members.first()) {
        if(db.has(`afk.${message.mentions.members.first().id}+${message.guild.id}`)){
            message.channel.s
            message.channel.send(message.mentions.members.first().user.tag);
        }
        }
 
})
Schema.findOne({ Guild: message.guild.id}, async (err, data) => { if(!data) return message.channel.send("no data"); if (message.channel.id !== data.Channel) return; chatBot(message, message.channel, message.author.id); });

mongoose.connect('config.mongo'),
{
    useUnifiedTopology : true,
    useNewUrlParser : true,
}

client.login(token)