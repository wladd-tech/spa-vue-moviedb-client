import './assets/normalize.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomeView from '@/pages/HomePage.vue'
import UsersView from '@/pages/UsersPage.vue'
import SearchView from '@/pages/SearchPage.vue'
import CatalogView from '@/pages/CatalogPage.vue'
import ProfileView from '@/pages/ProfilePage.vue'
import LoginView from '@/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView
    },
    {
      name: 'Catalog',
      path: '/catalog',
      component: CatalogView
    },
    {
      name: 'Search',
      path: '/search',
      component: SearchView
    },
    {
      name: 'Users',
      path: '/users',
      component: UsersView
    },
    {
      name: 'Profile',
      path: '/profile',
      component: ProfileView
    },
    {
      name: 'Login',
      path: '/sign-in',
      component: LoginView
    }
  ]
})

createApp(App).use(router).mount('#app')
