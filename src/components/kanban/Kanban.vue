<template>
    <span>
        <kanban-card :todos="todos" :kanbans="kanbans"></kanban-card>
    </span>
</template>

<script>
    import KanbanCard from './KanbanCard.vue'
    import axios from 'axios';
    import {EventBus} from '../../main';
    import router from "../../router/index"

    const MyApiClient = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    });

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
            // this.getUserData();
            let vm = this;

            EventBus.$on('update:todos', function(){
                vm.$nextTick(function(){
                    vm.renderTodos();
                });                
            });

            this.renderTodos();            
            
            MyApiClient.get('api/kanbans').then(
                response => (this.kanbans = response.data));
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
                        if(response.data.user) {
                            router.push("/home")
                        }
                    })
                .catch((errors) => {
                    router.push("/")
                })
            },
        }
    }
</script>