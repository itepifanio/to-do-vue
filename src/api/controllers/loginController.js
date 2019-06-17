const AppDAO = require('../models/dao') 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const dao = new AppDAO('./src/database/database.sqlite3') 

const User = require('../models/user');
const users = new User(dao);

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },

        (username, password, done) => {
            users.findUser(username, password).then(function(ev) {
                if(ev) {
                    done(null, ev)
                } else {
                    done(null, false, { message: 'Incorrect username or password'})
                }
            });
        }
    )
)

exports.login = function(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
          return next(err);
        }
        
        if (!user) {
          return res.status(400).send([user, "Cannot log in", info]);
        }
        
        req.login(user, err => {
          res.send("Logged in");
        });
      })(req, res, next);
}

exports.user = (req, res) => {
    let user = users.findUser(user => {
      return user.id === req.session.passport.user
    })
  
    console.log([user, req.session])
  
    res.send({ user: user })
}

exports.authMiddleware = function(req, res, next) {
    if (!req.isAuthenticated()) {
        console.log(req.session.passport);
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}
  