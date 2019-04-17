import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Kanban from '../components/Kanban.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

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
            path: '/home',
            name: 'home',
            component: Kanban
        }
    ]
});