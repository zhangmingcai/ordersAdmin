import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/login.vue';
import Home from '@/components/pages/home.vue';

Vue.use(Router)

export default new Router({
    routes: [
      	{
      	  	path: '/',
      	  	name: 'Login',
      	  	component: Login
      	},
      	{
      	  	path: '/home',
      	  	name: 'Home',
      	  	component: Home
      	}
    ]
})

