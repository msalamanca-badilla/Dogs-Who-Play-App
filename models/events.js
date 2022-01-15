var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventLocation: String,
  addDescription: String,
  dateOfEvent:{
      type: Date,
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