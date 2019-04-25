const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const Todo = require('../models/to-do');
const todos = new Todo(dao);

exports.todoList = function(req, res){
    todos.getAll().then(
        ev => res.json(ev)
    )
}