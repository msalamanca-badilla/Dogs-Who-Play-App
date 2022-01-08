const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Dog = require('../models/dog');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },
  function(accessToken, refreshToken, profile, cb) {

    Dog.findOne({ googleId: profile.id })
    .then((dog) => {
      if (dog) {
        return dog;
      }

      return Dog.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
      });
    })
    .then((dog) => cb(null, dog))
    .catch((err) => cb(err));
    }
  )
);


passport.serializeUser(function(dog, done) {
    done(null, dog.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Dog.findById(id)
      .then((dog) => done(null,dog))
      .catch(err => done(err,null));
  });


