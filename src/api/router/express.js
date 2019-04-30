const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());

/* ******************** CONTROLLERS ************************* */
const todoController = require('../controllers/todoController');
const kanbanController = require('../controllers/kanbanController');

/* ******************** KANBAN ************************* */
app.get('/api/kanbans', kanbanController.kanbanList);
/* ******************** TODO ************************* */
app.get('/api/todos', todoController.list);
app.post('/api/todos/store', todoController.store);
app.put('/api/todos/update', todoController.update);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))