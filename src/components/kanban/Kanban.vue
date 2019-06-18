<template>
    <span>
        <kanban-card :todos="todos" :kanbans="kanbans"></kanban-card>
    </span>
</template>

<script>
    import KanbanCard from './KanbanCard.vue'
    import axios from 'axios';
    import {EventBus} from '../../main';
    
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
                seen: true,
                todos: [],
                kanbans: []
            };
        },
        mounted() {
            this.getUserData();
            let vm = this;

            EventBus.$on('update:todos', function(){
                vm.$nextTick(function(){
                    vm.renderTodos();
                });                
            });

            this.renderTodos();            
            
            MyApiClient.get('api/kanbans').then(
                response => (this.kanbans = response.data))
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
                            this.seen = false;
                            router.push("/home")
                        }
                    })
                    .catch((errors) => {
                        router.push("/")
                    })
            }
        }
    }
</script>