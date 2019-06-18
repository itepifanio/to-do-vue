<template>
    <div class="row">
    <span v-for="kanban in kanbans" :key="kanban.id" class="col-md-4">
        <div class='card padding-card'>
            <div class="card-header">
                {{ kanban.title }}
            </div>
            <div class="col-md-4" style="max-width:none">
                <div class='ui centered card-body'>
                    <todo-list :todos="filterList(kanban.id, todos)" :kanbanid="kanban.id"></todo-list>

                    <create-todo v-on:add-todo="addTodo" :kanbanid="kanban.id"></create-todo>
                </div>
            </div>
        </div>
    </span>
    </div>
</template>

<script type="text/javascript">
    import TodoList from '../todo/TodoList';
    import CreateTodo from '../todo/CreateTodo';
    import {EventBus} from "../../main";
    import axios from 'axios';  

    export default {
        props: ['kanbans', 'todos'],
        components: {
            TodoList,
            CreateTodo
        },
        mounted() {
            const MyApiClient = axios.create({
                    baseURL: 'http://localhost:3000',
                    timeout: 6000
                });
            
            EventBus.$on('delete-todo', function (todo) {
                EventBus.$emit('update:todos');
                MyApiClient.post('api/todos/delete/' + todo.id);
            });            
        },
        methods: {
            filterList(id, todos) {
                return todos.filter(item => {
                    return item.kanbanid === id;
                });
            },
            addTodo(todo) {
                this.todos.push({
                    title: todo.title,
                    description: todo.description,
                    kanbanid: todo.kanbanid
                });
            },
        }
    };
</script>

<style>
    .padding-card {
        margin-right: 15px;
        margin-left: 15px;
    }
</style>
