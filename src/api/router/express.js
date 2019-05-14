const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
var session = require('express-session');
var user = require('../models/user');

app.use(cookieParser());

app.use(session({
    key: 'user_id',
    secret: 'nothing',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 100000
    }
}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* ******************** LOGIN ************************* */
var checkLogin = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/home');
    } else {
        next();
    }    
};

app.get(/api/, checkLogin, (req, res) => {
	res.redirect('/')
});

/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.todoList);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))