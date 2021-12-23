const app = require("../app");
const Event = require('../models/event');


function newEvent(req, res,next) {
    res.render('dogs/events')
}

module.exports = {
    new: newEvent,
}
