const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const Todo = require('../models/to-do');
const todos = new Todo(dao);

exports.todoList = function(req, res){
    todos.getAll().then(
        ev => res.json(ev)
    );
}

exports.todoStore = function(req, res){
    const {title, description, date, kanbanid} = req.body;
    todos.create(title, description, date, kanbanid);
    res.status(200).send('Success');
}