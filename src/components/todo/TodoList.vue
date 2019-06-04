<template>
    <div>
        <draggable group="todos" @start="drag=true" @end="drag=false">
            <div v-for="todo in todos" :key="todo.id" class="card-bottom">
                <todo :todo="todo"></todo>
            </div>
        </draggable>
        
    </div>
</template>

<script type="text/javascript">

    import Todo from './Todo';
    import draggable from 'vuedraggable';

    export default {
        props: ['todos'],
        components: {
            Todo, draggable
        }
    };
</script>
