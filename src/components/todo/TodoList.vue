<template>
    <div>
        <todo v-for="(todo) in todos" :key="todo.id" :todo.sync="todo"></todo>
    </div>
</template>

<script type="text/javascript">

    import Todo from './Todo';

    export default {
        props: ['todos'],
        components: {
            Todo,
        }
    };
</script>
