var router = require('express').Router();
var dogsCtrl = require('../controllers/dogs');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.get('/', dogsCtrl.index);


module.exports = router;