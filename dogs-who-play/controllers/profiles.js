const app = require("../app");

function show(req,res,next){
    res.render('dogs/profiles')
}

module.exports = {
    show,
}