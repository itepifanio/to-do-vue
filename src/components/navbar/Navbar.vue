<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="../../assets/logo.png" width="30" height="30" alt="Vue icon">
  </a>
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link"> Login </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home" class="nav-link"> Home </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" class="nav-link"> Registro </router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default{
}
</script>

<style>
.navbar {
  margin-bottom: 40px;
}
</style>
