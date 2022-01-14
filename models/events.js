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

module.exports = mongoose.model('Event', eventSchema);