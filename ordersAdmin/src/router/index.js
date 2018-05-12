import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue';
import Home from '@/components/home/home.vue';
import DeskStatus from '@/components/deskStatus/DeskStatus.vue'
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
            redirect: '/home/deskStatus',
      	  	component: Home,
            children: [
                {
                    path: 'deskStatus',
                    component: DeskStatus
                }
            ]
      	}
    ]
})

