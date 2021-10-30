const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Message', messageSchema);
