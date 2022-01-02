const Dog = require('../models/dog');

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
  

    Dog.find(modelQuery)
    .sort(sortKey).exec(function(err, dogs) {
      if (err) return next(err);
      res.render('dogs/index', { user: req.user, dogs, name: req.query.name, sortKey });
    });
  }

function show(req,res,next){
  res.render('dogs/myevents');
};

  module.exports = {
      index,
      show,
  }