const app = require("../app");
const Profile = require('../models/profile');

function create(req,res,next){
    const allProfiles = new Profile(req.body);
    allProfiles.save(function (err) {
      next()
    });
  }

  function index(req,res,next){
    Profile.find({}, function(err,allProfiles){
        res.render('dogs/alldogs', {allProfiles});
        })
} 

module.exports = {
    create,
    index
}