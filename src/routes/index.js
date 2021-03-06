import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Temp from '../views/Temp.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },        
        {
            path: '/Temp',
            name: 'Temp',
            component: Temp
        },        
    ]
})