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

const profileSchema = new mongoose.Schema({
  dogName: String,
  dogAge: Number,
  location: String,
  breed: String,
  dogDescription: String,
});

const dogSchema = new mongoose.Schema({
    name: String,
    email: String,
    events: [eventSchema],
    profile: [profileSchema],
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Dog', dogSchema);