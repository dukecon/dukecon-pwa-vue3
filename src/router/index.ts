import { createRouter, createWebHashHistory } from 'vue-router'
import TalksOverview from '../views/TalksOverview.vue'

const routes = [
  {
    path: '/',
    name: 'TalksOverview',
    component: TalksOverview
  },
  {
    path: '/timetable',
    name: 'TimeTable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "timetable" */ '../views/TimeTable.vue')
  },
  {
    path: '/speaker',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
