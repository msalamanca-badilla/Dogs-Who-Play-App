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

module.exports = {
    create,
    index,
}