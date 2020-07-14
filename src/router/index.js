import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import image from '../components/image'
import api from '../components/api'
import apiChild from '../components/apiChild'
import VueXProjet from '../components/VueXProjet'

  const routes = [
    {path: "/", component: image },
    {path: "/api/posts/:id/:title/:body/:userId", component: apiChild},
    {path: "/api", component: api},
    {path: "/vuex", component: VueXProjet},
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
