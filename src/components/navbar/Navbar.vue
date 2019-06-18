<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="../../assets/logo.png" width="60" height="60" alt="Vue icon">
  </a>
  <a class="navbar-brand" href="/">To Do App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item">
        <router-link to="/home" class="nav-link"> Início </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/" class="nav-link"> Entrar </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/register" class="nav-link"> Registrar-se </router-link>
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
  margin-bottom: 30px;
}

.navbar-brand {
  font-size: 1.7rem;
  margin-right: 0;
}

#navbarSupportedContent > ul > li > a{
  font-size: 1.4rem;
  font-size: 18px;
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0,0,0,.95);
}
</style>
