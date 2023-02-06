import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const AboutView = () => import('../views/AboutView.vue')
const DetailView = () => import('../views/DetailView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

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
