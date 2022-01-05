var express = require('express');
var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req,res){
  res.redirect('/dogs')
})

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/events/myevents');
});

module.exports = router;
