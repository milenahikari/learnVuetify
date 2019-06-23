import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Pages/Index'
import If from './components/Pages/If'
import For from './components/Pages/For'
import Model from './components/Pages/Model'
import Bind from './components/Pages/Bind'
import On from './components/Pages/On'
import Filters from './components/Pages/Filters'
import Computed from './components/Pages/Computed'
import Watch from './components/Pages/Watch'

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/if',
      name: 'If',
      component: If
    },
    {
      path: '/for',
      name: 'For',
      component: For
    },
    {
      path: '/model',
      name: 'Model',
      component: Model
    },
    {
      path: '/bind',
      name: 'Bind',
      component: Bind
    },
    {
      path: '/on',
      name: 'On',
      component: On
    },
    {
      path: '/filters',
      name: 'Filters',
      component: Filters
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    }
  ]
})

export default routers;