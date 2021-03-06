import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Kanban from '../components/kanban/Kanban.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/home',
            name: 'home',
            component: Kanban
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }

    ]
});