const express = require('express')
const app = express()
const port = 3000
const passport = require('passport');
const passportConfig = require('../config/passport');


app.use(passport.initialize());
app.use(passport.session());
require('../config/passport')(app);


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.todoList);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

require('../auth')(app,passport);