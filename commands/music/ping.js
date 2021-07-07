module.exports = {
    name : 'ping',
    run : async(client, message, args) => {

    message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
  }
};
