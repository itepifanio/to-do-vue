<template>
<div>
    <navbar :todos="todos"></navbar>


    <kanban :todos="todos" :kanbans="kanbans"></kanban>

</div>
</template>

<script>
import Kanban from './components/Kanban.vue'
import Navbar from './components/navbar/Navbar.vue'

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
                project: 'Description x',
                kanbanid: 1
            }, {
                title: 'Title 2',
                project: 'Description y',
                kanbanid: 2
            }, {
                title: 'Title 3',
                project: 'Description z',
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
