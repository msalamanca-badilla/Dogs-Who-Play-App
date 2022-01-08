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

function show(req,res,next){ //rename to myEvents
      res.render('dogs/myevents');

  };

function index(req,res,next){ //rename to dogs/:id, dog show page
    Dog.findById(req.params.id, function(err, event){
        console.log({event})
      res.render('dogs/idevent', {event})
    })
}

//create index function /dogs route,
// Dog.find({}, function(err,dogs){ <- gets all dogs
    //   res.render('dogs/index', {dogs});
    // })

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