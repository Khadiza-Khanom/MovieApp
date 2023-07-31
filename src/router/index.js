import { createRouter, createWebHistory } from 'vue-router'
const Home=() => import('../views/HomeView.vue')
const About=() => import('../views/AboutView.vue')
const movies=() => import('../views/movies.vue')
const notfound=() => import('../views/notfound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    }, {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: notfound
    }
  ]
})

export default router
