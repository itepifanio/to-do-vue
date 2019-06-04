<template>
    <div>
        <draggable group="todos" @start="drag=true" @end="drag=false" :component-data="getComponentData()">
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
        },
        methods: {
            getComponentData() {
                return {
                    on: {
                        change: function(e, t) {
          	                console.log(e)
                        }
                    }
                }
            }
        }
    };
</script>
