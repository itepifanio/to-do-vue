<template>
    <div class='ui basic content center aligned segment'>
        <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
            <i class='plus icon'></i>
        </button>

        <div class='ui centered card' v-show="isCreating">
            <div class='content'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input v-model="titleText" type='text' ref='title' defaultValue="">
                    </div>
                    <div class='field'>
                        <label>Description</label>
                        <input type='text' ref='description' defaultValue="" v-model="projectText">
                    </div>
                    <div class='field'>
                        <label>Date</label>
                        <input type='date' ref='date' defaultValue="" v-model="date">
                    </div>
                    <div class='ui two button attached buttons'>
                        <button class='ui basic blue button' v-on:click="sendForm()">
                            Create
                        </button>
                        <button class='ui basic red button' v-on:click="closeForm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios';

    export default {
        props: ['kanbanid'],
        data() {
            return {
                titleText: '',
                projectText: '',
                date: moment.now(),
                isCreating: false,
            };
        },
        methods: {
            openForm() {
                this.isCreating = true;
            },
            closeForm() {
                this.isCreating = false;
            },
            sendForm() {
                if (this.titleText.length > 0 && this.projectText.length > 0) {
                    const MyApiClient = axios.create({
                        baseURL: 'http://localhost:3000',
                        timeout: 6000
                    });

                    const title = this.titleText;
                    const description = this.projectText;
                    const kanbanid = this.kanbanid;
                    const date = Date.parse(this.date);

                    this.$emit('add-todo', {
                        title,
                        description,
                        date,
                        kanbanid
                    });

                    MyApiClient.post('api/todos/store', {
                        'title': title,
                        'description': description,
                        'date': date,
                        'kanbanid': kanbanid
                    });
                }
                this.isCreating = false;
            },
        },
    };
</script>
