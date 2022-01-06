let express = require('express');
let router = express.Router();
let profilesCtrl = require('../controllers/profiles');

router.post('/', profilesCtrl.create);
router.get('/adddog', profilesCtrl.newDog)
router.get('/', profilesCtrl.show);


module.exports = router;