<template>
    <div>
        <draggable group="todos" @start="drag=true" @end="drag=false">
            <div v-for="todo in todos" :key="todo.id">
                <todo :todo="todo"></todo>
            </div>
            <!-- <div v-for="element in myArray" :key="element.id">{{element.name}}</div> -->
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
