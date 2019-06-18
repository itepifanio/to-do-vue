const Promise = require('bluebird')  
const AppDAO = require('./dao')  
const Kanban = require('./kanban')  
const Todo = require('./to-do')

function main() {  
  const dao = new AppDAO('../../database/database.sqlite3')
  const todo = new Todo(dao)
  const kanban = new Kanban(dao)
  let kanbanId;

  kanban.createTable()
    .then(() => todo.createTable())
    .then(() => kanban.create('Done'))
    .then(() => kanban.create('To do'))
    .then(() => kanban.create('Doing'))
    .then((data) => {
      kanbanId = data.id;
      const todos = [
        {
          title: 'Need do something',
          description: 'To do that I need a lot of stuff...',
          // date: new Date().now().toString(),
          date: "1554829099019",
          kanbanid: kanbanId
        },
      ]
      return Promise.all(todos.map((t) => {
        const { title, description, date } = t; // Por algum mistério da natureza kanbanId aqui fica undefined na hora de criar
        return todo.create(title, description, date, t.kanbanid)
      }))
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()