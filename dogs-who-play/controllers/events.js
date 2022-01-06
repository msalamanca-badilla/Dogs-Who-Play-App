const app = require("../app");
// const Dog = require('../models/dog');
const Event = require('../models/event');

function newEvent(req, res,next) {
    res.render('dogs/events')
}

// function create(req,res,next) {
//     const event = new Event(req.body);
//     event.save(function(err){
//         console.log({event})
//         if(err) return res.redirect('dogs/events');
//         res.redirect('/events/myevents');
//     })
// }

function create(req,res,next) {
    const event = new Event(req.body);
    event.save(function(err){
        console.log('saved')
        console.log({event})
        if(err) return res.redirect('dogs/events');
        res.redirect('/events/myevents');  
    })
};


function show(req,res,next){
    Event.find({}, function(err,events){
      res.render('dogs/myevents', {events});
    })
  };

function index(req,res,next){
    Event.findById(req.params.id, function(err, event){
      res.render('dogs/idevent', {event})
    })
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