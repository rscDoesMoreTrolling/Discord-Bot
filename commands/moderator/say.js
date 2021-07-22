module.exports = {
  name: "say",
  description: "Bot Will Say If You Say ",
  usage: "<msg>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let MSG = args.slice(0).join(" ");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();
  },
};
