const express = require('express')
const app = express()
const port = 3000

const AppDAO = require('./dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const Kanban = require('./kanban')
const kanban = new Kanban(dao) 

const Todo = require('./to-do')
const todos = new Todo(dao) 

app.get('/api/kanbans',
    (req, res) => kanban.getAll().then(
        ev => res.json(ev)
    )
)

app.get('/api/todos', 
    (req, res) => todos.getAll().then(
        ev => res.json(ev)
    )
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))