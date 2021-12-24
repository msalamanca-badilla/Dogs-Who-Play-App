let express = require('express');
let router = express.Router();
let eventsCtrl = require('../controllers/events');
	
router.get('/new', eventsCtrl.new);
router.post('/', eventsCtrl.create);
	
module.exports = router;