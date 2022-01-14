var mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    dogName: {
      type: String,
      required: true,
    },
    dogAge: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    dogDescription: {
      type: String,
      required: true,
    },
  });

  module.exports = mongoose.model('Profile', profileSchema);