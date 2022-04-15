var mongoose = require('mongoose');
const Schema = mongoose.Schema

const dogSchema = new mongoose.Schema({
    name: String,
    email: String,
    events: {type: Schema.Types.ObjectId, ref:'Event'},
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Dog', dogSchema);