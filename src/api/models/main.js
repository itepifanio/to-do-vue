const Promise = require('bluebird')  
const AppDAO = require('./dao')  
const Kanban = require('./kanban')  
const Todo = require('./to-do')
const User = require('./user')

function main() {  
  const dao = new AppDAO('./src/database/database.sqlite3')
  const todo = new Todo(dao)
  const kanban = new Kanban(dao)
  const user = new User(dao);
  let kanbanId;

  kanban.createTable()
    .then(() => user.createTable())
    .then(() => todo.createTable())
    .then(() => user.create('example', 'example@gmail.com', '123456'))
    .then(() => kanban.create('Done'))
    .then(() => kanban.create('To do'))
    .then(() => kanban.create('Doing'))
    .then(() => user.createTable())
    .then(() => user.create('epitacio', 'epitacio@gmail.com', '123456'))
    .then((data) => {
      const todos = [
        {
          title: 'Need do something',
          description: 'To do that I need a lot of stuff...',
          // date: new Date().now().toString(),
          date: "1554829099019",
          kanbanid: 1,
          userid:  1
        },
      ]
      return Promise.all(todos.map((t) => {
        const { title, description, date } = t; // Por algum mistério da natureza kanbanId aqui fica undefined na hora de criar
        return todo.create(title, description, date, t.kanbanid, t.userid)
      }))
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()