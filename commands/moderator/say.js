module.exports = {
  name: "say",
  description: "Bot Will Say If You Say ",
  usage: "<msg>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let MSG = message.content.split(`${bot.prefix}say `).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();
  },
};
