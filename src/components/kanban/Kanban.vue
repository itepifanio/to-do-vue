<template>
    <span>
        <kanban-card :todos="todos" :kanbans="kanbans"></kanban-card>
    </span>
</template>

<script>
    import KanbanCard from './KanbanCard.vue'
    import axios from 'axios';
    
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
            const MyApiClient = axios.create({
                baseURL: 'http://localhost:3000',
                timeout: 1000
            });

            MyApiClient.get('api/todos').then(
                response => (this.todos = response.data))

            MyApiClient.get('api/kanbans').then(
                response => (this.kanbans = response.data))
        }
    }
</script>