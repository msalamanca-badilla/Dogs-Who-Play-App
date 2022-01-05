var router = require('express').Router();
var dogsCtrl = require('../controllers/dogs');

router.get('/', dogsCtrl.index);

module.exports = router;