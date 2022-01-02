let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');
	
router.get('/new', eventsCtrl.new);
router.post('/', eventsCtrl.create);
router.get('/myevents', eventsCtrl.show);
router.get('/:id', eventsCtrl.index);
	
module.exports = router;