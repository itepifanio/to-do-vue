<template>
    <div>
        <navbar :todos="todos"></navbar>
        <router-view></router-view>
        <!-- <kanban :todos="todos" :kanbans="kanbans"></kanban> -->
    </div>
</template>

<script>
    // import Kanban from './components/Kanban.vue'
    import Navbar from './components/navbar/Navbar.vue'
    import axios from 'axios';
    
    export default {
        name: 'app',
        components: {
            // Kanban,
            Navbar,
        },
        data() {
            return {
                todos: [],
                kanbans: [{
                    id: 1,
                    title: 'To do'
                }, {
                    id: 2,
                    title: 'Doing'
                }, {
                    id: 3,
                    title: 'Done'
                }]
            };
        },
        mounted() {
            const MyApiClient = axios.create({
                baseURL: 'http://localhost:3000',
                timeout: 1000
            });

            MyApiClient.get('api/todos').then(
                response => (this.todos = response.data))
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
