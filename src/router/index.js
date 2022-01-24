import { createRouter, createWebHistory } from 'vue-router'
import SelectedUsers from '../views/SelectedUsers.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/:id',
    name: 'User',
    component: User
  },
  {
    path: '/selected-users',
    name: 'SelectedUsers',
    component: SelectedUsers
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
