var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    nameOfEvent: String,
    openTo: String,
    addDescription: String,
})

module.exports = mongoose.model('Event', eventSchema);