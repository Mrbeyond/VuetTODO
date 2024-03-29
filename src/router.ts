import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue'),
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Contact.vue'),
    },
    {
      path: '/Backend',
      name: 'Backend',
      component: () => import(/* webpackChunkName: "Backend" */ './views/Backend.vue'),
    }
  ],
});
