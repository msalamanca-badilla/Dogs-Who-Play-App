var mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Dog', dogSchema);