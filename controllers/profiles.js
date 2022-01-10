const app = require("../app");
const Dog = require('../models/dog');

function newDog(req,res,next){
    res.render('dogs/newdog')
}

function create(req,res,next){
    req.user.profile.push(req.body);
    req.user.save(function(err) {
      res.redirect('/profiles');
    });
}

function myDogs(req,res,next){
      res.render('dogs/profiles');
  };

  function show(req,res,next){
    Dog.findOne({'profile._id': req.params.id}, function(err, dog) {
      const profiles = dog.profile.id(req.params.id);
      console.log(profiles)
      res.render('dogs/idevent', {profiles}) 
})}
module.exports = {
    create,
    newDog,
    myDogs,
    show
}