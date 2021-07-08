const mongoose = require('mongoose');

const Schema = mongodb.Schema({
  Guild: String,
  Channel: String,
})

module.exports = mongodb.model("chatbot", Schema)