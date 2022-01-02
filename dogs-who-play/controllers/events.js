const app = require("../app");
const Event = require('../models/event');


function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    const event = new Event(req.body);
    event.save(function(err){
        if(err) return res.redirect('/dogs/event');
        res.redirect('/dogs');
    })
}

module.exports = {
    new: newEvent,
    create,
}
