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
        <router-link to="/" class="nav-link" v-show="!logged"> Login </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/register" class="nav-link" v-show="!logged"> Registro </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/home" class="nav-link" v-show="logged"> Home </router-link>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link" v-on:click="logout" v-show="logged"> Logout </a>
        </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>  
    import router from "../../router/index.js"
    import axios from "axios"   
    const MyApiClient = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    });
  
    export default {    
        name: "Navbar",
        data() {
          return {
            logged: false,
          }
        },    
        methods: { 
            logout: function(e) {
              e.preventDefault();
              MyApiClient.get('/api/logout')
                .then((res) => {
                  this.logged = false;
                  router.push("/")
                }).catch((err) => {
                  console.log(err);
              })
            },
            getUserData: function() {
                MyApiClient.get("/api/user")
                    .then((response) => {
                        if(response.data.user) {
                            this.logged = true;
                            router.push("/home");
                        }
                    }).catch((errors) => {

                    })
            }
        },
        mounted() {
          this.getUserData();
        },
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
