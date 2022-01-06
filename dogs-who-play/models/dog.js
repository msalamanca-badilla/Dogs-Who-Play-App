var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventLocation: String,
  addDescription: String,
  dateOfEvent:{
      type: Date,
      default(){
          return new Date().getFullYear();
      }
    },
  }, {
      timestamp: true,
  }
);

const dogSchema = new mongoose.Schema({
    name: String,
    email: String,
    events: [eventSchema],
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Dog', dogSchema);