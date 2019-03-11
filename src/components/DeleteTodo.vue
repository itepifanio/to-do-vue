<template>
    <span class='right floated edit icon' v-on:click="showForm">
      <i class='edit icon'></i>
    </span>
    <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
      <i class='trash icon'></i>
    </span>
</template>