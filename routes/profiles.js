let express = require('express');
let router = express.Router();
let profilesCtrl = require('../controllers/profiles');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.post('/', isLoggedIn, profilesCtrl.create);
router.get('/adddog', profilesCtrl.newDog)
router.get('/', profilesCtrl.myDogs);
router.get('/:id', profilesCtrl.index);

module.exports = router;