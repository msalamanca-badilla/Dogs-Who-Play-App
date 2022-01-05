let express = require('express');
let router = express.Router();
let friendsCtrl = require('../controllers/friends');


router.get('/', friendsCtrl.index);
	
module.exports = router;