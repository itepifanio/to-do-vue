const express = require('express')
const app = express()
const port = 3000
const passport = require('passport');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
// const users = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 60 * 60 * 1000 // 1 hora
}))

app.use(passport.initialize());
app.use(passport.session());
// https://blog.jscrambler.com/vue-js-authentication-system-with-node-js-backend
let users = [
    {
      id: 1,
      name: "Jude",
      email: "user@email.com",
      password: "password"
    },
    {
      id: 2,
      name: "Emma",
      email: "emma@email.com",
      password: "password2"
    }
]

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },

        (username, password, done) => {
            let user = users.find((user) => {
                return user.email === username && user.password === password
            })

            if (user) {
                done(null, user)
            } else {
                done(null, false, { message: 'Incorrect username or password'})
            }
        }
    )
)
/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.todoList);


app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", { successRedirect: '/home',
                                    failureRedirect: '/',
                                    failureFlash: false }
    )
});

const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
}

app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find(user => {
      return user.id === req.session.passport.user
    })
  
    console.log([user, req.session])
  
    res.send({ user: user })
})

app.get("/api/logout", function(req, res) {
    req.logout();
  
    console.log("logged out")
  
    return res.send();
});



passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
      return user.id === id
    })
  
    done(null, user)
})
passport.serializeUser((user, done) => {
    done(null, user.id)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// require('../auth')(app,passport);