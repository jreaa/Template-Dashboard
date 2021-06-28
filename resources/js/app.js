require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
import "sweetalert2/dist/sweetalert2.min.css"


import Home from './Components/Home.vue'
import App from './Components/App.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component : App,
            name : 'home'
        },
    ]
})

Vue.component('pagination', require('laravel-vue-pagination'))

const app = new Vue({
    el: '#app',
    components : {App},
    router
});