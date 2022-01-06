var mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    dogName: String,
    dogAge: Number,
    location: String,
    breed: String,
})


module.exports = mongoose.model('Profile', profileSchema);