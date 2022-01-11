const { eventNames } = require("../app");
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

function friendsEvents(req,res,next){
  req.user.profiles.push(req.body)
  req.user.save(function(err) {
    res.redirect('/events/myevents');
  });
}

function myEvents(req,res,next){
      res.render('dogs/myevents');
  };

function show(req,res,next){
        Dog.findOne({'events._id': req.params.id}, function(err, dog) {
          const events = dog.events.id(req.params.id);
          res.render('dogs/idevent', {events}) 
    })}

function index(req,res,next){
    Dog.find({}, function(err,events){
        res.render('dogs/allevents', {events});
        })
}

function deleteEvent(req, res) {
    Dog.findOne({'events._id': req.params.id}, function(err, dog) {
      const eventSubdoc = dog.events.id(req.params.id);
      eventSubdoc.remove();
      dog.save(function(err) {
        res.redirect('/events/myevents');
      });
    });
  } 

function update(req,res){ 
  Dog.findOne({'events._id': req.params.id}, function(err, dog){
    const eventsUpdate = dog.events.id(req.params.id);
    eventsUpdate.eventName = req.body.eventName;
    dog.save(function(err){
      res.redirect('/events/myevents');
      })
    }
  )}

module.exports = {
    new: newEvent,
    create,
    myEvents,
    show,
    delete: deleteEvent,
    index,
    update,
    friendsEvents
}