const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const Todo = require('../models/to-do');
const todos = new Todo(dao);

exports.list = function(req, res){
    todos.getAll().then(
        ev => res.json(ev)
    );
}

exports.store = function(req, res){
    const {title, description, date, kanbanid} = req.body;
    todos.create(title, description, date, kanbanid);
    res.status(200).send('Success');
}

exports.update = function(req, res){
    const todo = req.body;
    todos.update(todo);
    res.status(200).send('Success');
}

exports.delete = function(req, res){
    todos.delete(req.params.id);
    res.status(200).send('Success');
}