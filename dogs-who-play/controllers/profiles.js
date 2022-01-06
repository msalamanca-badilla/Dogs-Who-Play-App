const app = require("../app");
const Profile = require('../models/profile');

function newDog(req,res,next){
    res.render('dogs/newdog')
}

function create(req,res,next){
    const profile = new Profile(req.body);
    profile.save(function(err){
        console.log({profile})
        if(err) return res.redirect('/profiles');
        res.redirect('/profiles');
    })
}

function show(req,res,next){
    Profile.find({}, function(err,profiles){
      res.render('dogs/profiles', {profiles});
    })
  };


module.exports = {
    create,
    newDog,
    show
}