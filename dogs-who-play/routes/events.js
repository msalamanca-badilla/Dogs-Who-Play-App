let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
	
router.get('/new', eventsCtrl.new);
router.post('/', eventsCtrl.create);
router.get('/myevents', eventsCtrl.show);
router.get('/:id', eventsCtrl.index);
router.delete('/:id', eventsCtrl.delete);
	
module.exports = router;