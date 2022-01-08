const app = require("../app");
const Dog = require('../models/dog');
// const Event = require('../models/dog');
// const Event = require('../models/event');

function newEvent(req, res,next) {
    res.render('dogs/events')
}

function create(req,res,next) {
    req.user.events.push(req.body);
    req.user.save(function(err) {
      res.redirect('/events/myevents');
    });
  }

function show(req,res,next){
    Dog.find({}, function(err,dog){
      res.render('dogs/myevents', {dog});
    })
  };

function index(req,res,next){
    Dog.findById(req.params.id, function(err, dog){
      res.render('dogs/idevent', {dog})
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
    show,
    index,
    delete: deleteEvent
}

// 61d63e74d52b64ae7029de5f

// dog[0].events[0].eventName