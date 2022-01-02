const app = require("../app");
const Event = require('../models/event');


function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    const event = new Event(req.body);
    event.save(function(err){
        console.log('saved')
        console.log({event})
        if(err) return res.redirect('dogs/events');
        res.redirect('/events/myevents');
    })
}

function show(req,res,next){
    Event.find({}, function(err,events){
      res.render('dogs/myevents', {events});
    })
  };

module.exports = {
    new: newEvent,
    create,
    show
}
