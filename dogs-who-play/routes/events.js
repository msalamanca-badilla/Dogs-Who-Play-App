let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');
	
router.get('/new', eventsCtrl.new);
	
module.exports = router;