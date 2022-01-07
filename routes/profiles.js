let express = require('express');
let router = express.Router();
let profilesCtrl = require('../controllers/profiles');

router.post('/', profilesCtrl.create);
router.get('/adddog', profilesCtrl.newDog)
router.get('/', profilesCtrl.show);
router.get('/:id', profilesCtrl.index);

module.exports = router;