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
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model('Event', eventSchema);