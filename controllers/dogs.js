const Dog = require('../models/dog');

function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
  

    Dog.find(modelQuery)
    .sort(sortKey).exec(function(err, dogs) {
      if (err) return next(err);
      res.render('dogs/index', { 
        user: req.user, 
        dogs, 
        name: req.query.name, 
        sortKey 
      });
    });
  }



  module.exports = {
      index,
  }