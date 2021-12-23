let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');
	
router.get('/new', flightsCtrl.new);
	
module.exports = router;