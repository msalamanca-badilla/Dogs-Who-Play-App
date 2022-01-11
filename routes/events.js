let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
	
router.get('/new', eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/myevents', eventsCtrl.myEvents);
router.get('/:id', eventsCtrl.show);
router.delete('/:id', isLoggedIn, eventsCtrl.delete);
router.get('/', eventsCtrl.index);
router.post('/', isLoggedIn, eventsCtrl.friendsEvents);
	
module.exports = router;