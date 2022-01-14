let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');
let allEventsCtrl = require('../controllers/allevents');

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
	
router.get('/new', eventsCtrl.new);
router.post('/', isLoggedIn, allEventsCtrl.create, eventsCtrl.create);
router.get('/myevents', eventsCtrl.myEvents);
router.get('/:id', eventsCtrl.show);
router.delete('/:id', isLoggedIn, eventsCtrl.delete);
router.put('/:id', eventsCtrl.update);
router.get('/:id/updateevent', eventsCtrl.showUpdate);


router.get('/', allEventsCtrl.index);



module.exports = router;