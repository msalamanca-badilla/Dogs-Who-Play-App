const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Dog = require('../models/dog');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Dog.findOne({ 'googleId': profile.id }, function(err, dog) {
      if (err) return cb(err);
      if (dog) {
        return cb(null, dog);
      } else {
        // we have a new student via OAuth!
        var newDog = new Dog({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newDog.save(function(err) {
          if (err) return cb(err);
          return cb(null, newDog);
        });
      }
    });
  }
));

passport.serializeUser(function(dog, done) { //PASSPORT
    done(null, dog.id);//STUDENT.ID REFERS TO THE MONGOOSE DATABASE
  });
  
  passport.deserializeUser(function(id, done) {
    Dog.findById(id)
      .then((dog) => done(dog))
      .catch(err => done(err,null));
  });


