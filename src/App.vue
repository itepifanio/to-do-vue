<template>
    <div>
        <navbar :todos="todos"></navbar>
        <kanban :todos="todos" :kanbans="kanbans"></kanban>
    </div>
</template>

<script>
    import Kanban from './components/Kanban.vue'
    import Navbar from './components/navbar/Navbar.vue'
    import moment from 'moment';
    export default {
        name: 'app',
        components: {
            Kanban,
            Navbar,
        },
        data() {
            return {
                todos: [{
                    title: 'Title 1',
                    description: 'Description x',
                    date: moment.now(),
                    kanbanid: 1
                }, {
                    title: 'Title 2',
                    description: 'Description y',
                    date: moment.now(),
                    kanbanid: 2
                }, {
                    title: 'Title 3',
                    description: 'Description z',
                    date: moment.now(),
                    kanbanid: 3
                }],
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
