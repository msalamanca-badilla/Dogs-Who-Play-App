const app = require("../app");
const Profile = require('../models/dog');

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

function index(req,res,next){
    Profile.findById(req.params.id, function(err, profile){
        res.render('dogs/iddog', {profile})
      })
}

module.exports = {
    create,
    newDog,
    myDogs,
    index
}