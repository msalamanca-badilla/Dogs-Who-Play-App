let express = require('express');
let router = express.Router();
let profilesCtrl = require('../controllers/profiles');

router.get('/', profilesCtrl.show);

module.exports = router;