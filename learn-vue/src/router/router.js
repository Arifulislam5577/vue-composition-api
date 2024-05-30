import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Blogs from '@/views/BlogsView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blogs', component: Blogs }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
