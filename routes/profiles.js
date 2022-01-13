let express = require('express');
let router = express.Router();
let profilesCtrl = require('../controllers/profiles');
let allProfilesCtrl = require('../controllers/allprofiles');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.post('/', isLoggedIn, allProfilesCtrl.create,profilesCtrl.create);
router.get('/adddog', profilesCtrl.newDog)
router.get('/mydogs', profilesCtrl.myDogs);
router.get('/:id', profilesCtrl.show);


router.get('/', allProfilesCtrl.index);
module.exports = router;