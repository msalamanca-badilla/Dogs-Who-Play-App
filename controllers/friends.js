const app = require("../app");
const Event = require('../models/dog');

function index(req,res,next){
    res.render('dogs/allfriends');
}

function showFriends(req,res){
    Dog.findOne({'profile._id': req.params.id}, function(err, dog) {
      const friends = dog.profile.id(req.params.id);
      res.render('dogs/allfriends', {friends}) 
})}

module.exports = {
    index,
    showFriends,
}

