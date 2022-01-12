const app = require("../app");
const Event = require('../models/events');


function create(req,res,next) {
    const allEvent = new Event(req.body);
    allEvent.save(function (err) {
      res.redirect('/');
      next()
    });
    
  }

  function index(req,res,next){
    Event.find({}, function(err,allEvents){
        console.log({allEvents})
        res.render('dogs/allevents', {allEvents});
        })
} 
module.exports = {
    create,
    index
}