import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const publicRoutes = [{
  path: '/',
  component: () => import('../views/login')
}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
