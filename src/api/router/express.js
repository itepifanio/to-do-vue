const express = require('express')
const app = express()
const port = 3000
const passport = require('passport');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const AppDAO = require('../models/dao')
const dao = new AppDAO('./src/database/database.sqlite3')
const User = require('../models/user');
const users = new User(dao);

const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())

app.use(cookieSession({
    name: 'todo',
    keys: ['vueauthrandomkey'],
    maxAge: 60 * 60 * 1000, // 1 hora,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


// https://blog.jscrambler.com/vue-js-authentication-system-with-node-js-backend

/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.list);
app.post('/api/todos/store', todoController.store);
app.put('/api/todos/update', todoController.update);
app.post('/api/todos/delete/:id', todoController.delete);

app.post("/api/login", (req, res, next) => {
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
});

app.get("/api/logout", function(req, res) {
    req.logout();
    console.log("logged out")
    return res.send();
});

const authMiddleware = (req, res, next) => {
  console.log(req.session);
  if (!req.isAuthenticated()) {
    console.log("Not")
    res.status(401).send('You are not authenticated')
  } else {
    console.log("yes")
    return next()
  }
}


app.get("/api/user", authMiddleware, (req, res) => {
  let user = users.find(1)
  console.log([user, req.session])
    res.send({ user: user })
})

passport.use(
  new LocalStrategy(
      {
          usernameField: "email",
          passwordField: "password"
      },

      (username, password, done) => {
          users.findUser(username, password).then(function(user) {
            if(user) {
              done(null, user)
            } else {
              done(null, false, { message: 'Incorrect username or password'})
            }
          });
      }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  let user = users.find(id)
  done(null, user)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// require('../auth')(app,passport);