var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: String,
    addDescription: String,
    dateOfEvent:{
        type: Date,
        default(){
            return new Date().getFullYear();
            }
    }
});

module.exports = mongoose.model('Event', eventSchema);