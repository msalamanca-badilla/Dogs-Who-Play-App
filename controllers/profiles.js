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

function index(req,res,next){
    Profile.findById(req.params.id, function(err, profile){
        res.render('dogs/iddog', {profile})
      })
}

module.exports = {
    create,
    newDog,
    show,
    index
}