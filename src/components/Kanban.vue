<template>
<div class="row">
    <span v-for="(kanban, index) in kanbans" :key="index">
        <div class='card padding-card'>
            <div class="card-header">
                {{ kanban.title }}
            </div>
            <div class="col-md-4" style="max-width:none">
                <div class='ui centered card-body'>
                    <todo-list :todos="todos"></todo-list>

                    <create-todo v-on:add-todo="addTodo" :kanban-id="index"></create-todo>
                </div>
            </div>
        </div>
    </span>
</div>
</template>

<script type = "text/javascript" >
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

export default {
    props: ['kanbans', 'todos'],
    components: {
        TodoList,
        CreateTodo
    }
};
</script>

<style>
    .padding-card{
        margin-right: 15px;
        margin-left: 15px;
    }
</style>
