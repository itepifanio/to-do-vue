<template>
  <div>
    <todo-list :todos="todos"></todo-list>

    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import CreateTodo from './components/CreateTodo.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: true,
      }]
    };
  },
  methods: {
   addTodo(todo) {
      this.todos.push({
        title: todo.title,
        title: todo.project,
        done: todo.done,
      });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
