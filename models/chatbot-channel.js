const mongoose = require('mongoose');

const schema = mongoose.Schema({
  Guild: String,
  Channel: String,
})

module.exports = mongoose.model("chatbot", Schema)