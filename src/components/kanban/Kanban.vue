<template>
    <span>
        <kanban-card :todos="todos" :kanbans="kanbans"></kanban-card>
    </span>
</template>

<script>
    import KanbanCard from './KanbanCard.vue'
    import axios from 'axios';
    const MyApiClient = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    });

    import {EventBus} from '../../main';

    export default {
        components: {
            KanbanCard
        },
        data() {
            return {
                todos: [],
                kanbans: []
            };
        },
        mounted() {
            let vm = this;

            EventBus.$on('update:todos', function(){
                vm.$nextTick(function(){
                    vm.renderTodos();
                });
            });

            this.renderTodos();

            this.getUserData()

            MyApiClient.get('api/todos').then(
                response => (this.todos = response.data))

            MyApiClient.get('api/kanbans').then(
                response => (this.kanbans = response.data))
        },
        watch:{
            'todos' : function(){
                this.renderTodos();
            }
        },
        methods: {
            renderTodos(){
                MyApiClient.get('api/todos').then(
                    response => (this.todos = response.data))
            },
            getUserData: function() {
                MyApiClient.get("/api/user")
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((errors) => {
                        console.log(errors)
                        router.push("/")
                    })
            }
        }
    }
</script>