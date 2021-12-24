const app = require("../app");
const Event = require('../models/event');


function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    const event = req.body.event
}

module.exports = {
    new: newEvent,
    create,
}
