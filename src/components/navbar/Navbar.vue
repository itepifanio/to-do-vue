<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="../../assets/logo.png" width="30" height="30" alt="Vue icon">
  </a>
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

<!--  <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--    <ul class="navbar-nav ml-auto">-->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" href="#">-->
<!--          Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}-->
<!--        </a>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" href="#">-->
<!--          Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
</nav>
</template>

<script>
export default{
  props: ['todos']
}
</script>

<style>
.navbar {
  margin-bottom: 40px;
}
</style>
