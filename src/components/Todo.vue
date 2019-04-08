<template>
    <div class='ui centered card' style="width: 100%">
        <div class="content" v-show="!isEditing">
            <div class='header'>
                {{ todo.title }}
            </div>
            <div class='meta'>
                {{ todo.project }}
            </div>
            <div class='extra content'>
            <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </span>
                <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
            </div>
        </div>

        <div class="content" v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                    <label>Title</label>
                    <input type='text' v-model="todo.title">
                </div>
                <div class='field'>
                    <label>Description</label>
                    <input type='text' v-model="todo.project">
                </div>
                <div class='ui two button attached buttons'>
                    <button class='ui basic blue button' v-on:click="hideForm">
                        Close X
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {EventBus} from "../Events";

    export default {
        props: ['todo'],
        data() {
            return {
                isEditing: false,
            };
        },
        methods: {
            showForm() {
                this.isEditing = true;
            },
            hideForm() {
                this.isEditing = false;
            },
            deleteTodo(todo) {
                EventBus.$emit('delete-todo', todo);
            }
        },
    };
</script>
