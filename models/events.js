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
  addDescription: String,
  dateOfEvent:{
      type: Date,
      required: true,
      default(){
          return new Date().toString();
      }
    },
  }, {
      timestamp: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);