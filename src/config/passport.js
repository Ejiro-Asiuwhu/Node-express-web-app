const passport = require('passport');

module.exports = function passportConfig(app) {
  app.us(passport.initialize());
  app.use(passport.session());


  // stores user in session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  //   retireves user from session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  require('./strategies/local.strategy');
};
