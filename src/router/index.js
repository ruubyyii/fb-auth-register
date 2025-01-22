import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '@/views/RegisterView.vue'
import Perfil from '@/views/PerfilView.vue'
import Login from '@/views/LoginView.vue'
import { auth } from '@/db/firebase'

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil,
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser

  if (to.matched.some((record) => record.meta.requiresAuth) && !currentUser){
    next({name: 'register'});
  }else{
    next();
  }
})

export default router
