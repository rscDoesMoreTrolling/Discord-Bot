const mongoose = require('mongoose');

const schema = mongoose.schema({
  Guild: String,
  Channel: String,
})

module.exports = mongoose.model("chatbot", schema)