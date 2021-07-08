const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  Guild: String,
  Channel: String,
})

module.exports = mongoose.model("chatbot", Schema)