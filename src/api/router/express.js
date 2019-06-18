const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(session({
    secret: 'todo',
    saveUninitialized: true,
    resave: true,
}));

/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');
const userController = require('../controllers/userController');

/*************** LOGIN ************/
app.post('/api/login', userController.login);
app.get('/api/logout', userController.logout);
app.get('/api/user', userController.user);
app.post('/api/register', userController.userStore);

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.list);
app.post('/api/todos/store', todoController.store);
app.put('/api/todos/update', todoController.update);
app.post('/api/todos/delete/:id', todoController.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))