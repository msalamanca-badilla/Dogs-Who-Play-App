const app = require("../app");
const Event = require('../models/event');

function index(req,res,next){
    res.render('dogs/friends');
}

module.exports = {
    index,
}