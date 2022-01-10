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

function myEvents(req,res,next){
      res.render('dogs/myevents');
  };

function show(req,res,next){
        Dog.findOne({'events._id': req.params.id}, function(err, dog) {
          const events = dog.events.id(req.params.id);
          console.log(events)
          res.render('dogs/idevent', {events}) 
    })}
        // console.log(req.params.id)

        // const dog = await Dog.aggregate({ $match: {_id: ObjectId(req.params.id)}})
        // console.log(dog)}

        // const event = await Dog.findOne({"id": req.params.id})
    //     console.log(event)
    // ListModel.aggregate(
    //     { $match: {_id: ObjectId("57e6bcab6b383120f0395aed")}},

    // function show(req,res,next){
    //     Dog.findById(req.params.id, function(err,dog){
    //         dog.events.find({dog: dog._id})
    //     })
    // }

    // myModel.findById(myDocumentId, function (err, myDocument) {
    //     var subDocument = myDocument.mySubdocuments.id(mySubDocumentId);
    //   });

    // console.log(req.params.id)
    // Dog.findById(req.params.id, function(err, dog){
    //     console.log(dog)
    //     res.render('dogs/idevent') 
    // })

function index(req,res,next){
    Dog.find({}, function(err,events){
        res.render('dogs/allevents', {events});
        })
}

// function deleteEvent(req,res,next){
//     const id = req.params.id;
//     Dog.delete(id)
//         res.redirect('/events/myevents');
// }

function deleteEvent(req, res) {
    Dog.findOne({'events._id': req.params.id}, function(err, dog) {
      const eventSubdoc = dog.events.id(req.params.id);
      if (!eventSubdoc.userId.equals(req.user._id)) return res.redirect('/');
      eventSubdoc.remove();
      dog.save(function(err) {
        res.redirect('/');
      });
    });
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