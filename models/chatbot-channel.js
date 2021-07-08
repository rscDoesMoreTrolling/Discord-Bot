const mongoose = require('mongoose');

const Schema = mongo.Schema({
  Guild: String,
  Channel: String,
})

module.exports = mongodb.model("chatbot", Schema)