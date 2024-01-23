import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppCharacters from './pages/AppCharacters.vue'
import AppItems from './pages/AppItems.vue'
import AppTypes from './pages/AppTypes.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/characters',
      name: 'characters',
      component: AppCharacters
    },
    // {
    //   path: '/characters/:slug',
    //   name: 'characters',
    //   component: CharacterDetail
    // },
    {
      path: '/items',
      name: 'items',
      component: AppItems
    },
    // {
    //   path: '/items/:slug',
    //   name: 'items',
    //   component: ItemDetail
    // },
    {
      path: '/types',
      name: 'types',
      component: AppTypes
    },
    // {
    //   path: '/types/:slug',
    //   name: 'types',
    //   component: TypeDetail
    // },
  ]
})

export default router
