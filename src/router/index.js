import { createRouter, createWebHistory } from 'vue-router'

import MazePreprocessExample from '@/components/MazePreprocessExample.vue'
import MazeDragExample from '@/components/MazeDragExample.vue'
import HiddenPathsExample from '@/components/HiddenPathsExample.vue'
import SpinningDiscExample from '@/components/SpinningDiscExample.vue'

const routes = [
  {
    path: '/preprocess',
    name: 'MazePreprocessExample',
    component: MazePreprocessExample,
  },
  {
    path: '/drag',
    name: 'MazeDragExample',
    component: MazeDragExample,
  },
  {
    path: '/hidden',
    name: 'HiddenPathsExample',
    component: HiddenPathsExample,
  },
  {
    path: '/disc',
    name: 'SpinningDiscExample',
    component: SpinningDiscExample,
  },
  /*{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => */
  //import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
