const app = require("../app");
const Event = require('../models/events');
const Dog = require('../models/dog');


function create(req,res,next) {
    const allEvent = new Event(req.body);
    allEvent.save(function (err) {
      next()
    });
  }

  function index(req,res,next){
    Event.find({}, function(err,allEvents){
        res.render('dogs/allevents', {allEvents});
        })
} 

function deleteEvent(req, res,next) {
  Event.findOneAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
      next()
    
  });
} 

module.exports = {
    create,
    index,
    delete: deleteEvent,
}