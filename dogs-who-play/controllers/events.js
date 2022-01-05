const app = require("../app");
const Event = require('../models/event');


function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    const event = new Event(req.body);
    event.save(function(err){
        if(err) return res.redirect('dogs/events');
        res.redirect('/events/myevents');
    })
}

function show(req,res,next){
    Event.find({}, function(err,events){
      res.render('dogs/myevents', {events});
    })
  };

function index(req,res,next){
    const event = req.body.event;
    req.user.events.push({event})

    req.user
    .save()
    .then((dog) => res.redirect('/events/myevents'))
    .catch((err) => res.redirect('/events/myevents'));
  }

function deleteEvent(req,res,next){
    const id = req.params.id;
    Event.delete(id)
        res.redirect('/events/myevents');
}

module.exports = {
    new: newEvent,
    create,
    show,
    index,
    delete: deleteEvent
}