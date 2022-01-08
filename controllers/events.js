const app = require("../app");
const Dog = require('../models/dog');

function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    req.user.events.push(req.body);
    req.user.save(function(err) {
      res.redirect('/events/myevents');
    });
  }

function myEvents(req,res,next){
      res.render('dogs/myevents');
  };

function show(req,res,next){
        req.user.events.findById(req.params.id, function(err, event){
            res.render('dogs/idevent', {event}) 
        })
    }

function index(req,res,next){
    Dog.find({}, function(err,events){
        res.render('dogs/allevents', {events});
        })
}

function deleteEvent(req,res,next){
    const id = req.params.id;
    Dog.delete(id)
        res.redirect('/events/myevents');
}

module.exports = {
    new: newEvent,
    create,
    myEvents,
    show,
    delete: deleteEvent,
    index
}

// 61d63e74d52b64ae7029de5f

// dog[0].events[0].eventName