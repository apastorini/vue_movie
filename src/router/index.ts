import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DetailView from '../views/DetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:imdbid',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFoundView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notfound'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
