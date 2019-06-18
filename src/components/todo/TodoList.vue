<template>
    <div>
        <todo v-for="(todo, index) in todos" :key="index" :todo.sync="todo"></todo>
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
