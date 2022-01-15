var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  addDescription: {
    type: String,
    required: true,
  },
  dateOfEvent:{
      type: Date,
      required: true,
      default(){
        return new Date().toString();
      }
    },
  joinEvent:{
    type: Boolean, default: false
  }
  }, {
      timestamp: true,
  }
);

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
  openTo: {
    type: String,
    required: true,
  },
  dogDescription: {
    type: String,
    required: true,
  },
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