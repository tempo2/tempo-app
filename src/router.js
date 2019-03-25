import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dasbhoard',
      component: dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ './views/projects.vue')
    },
    {
      path: '/daybook',
      name: 'daybook',
      component: () => import(/* webpackChunkName: "about" */ './views/daybook.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/contacts.vue')
    },
    {
      path: '/wip',
      name: 'wip',
      component: () => import(/* webpackChunkName: "about" */ './views/wip.vue')
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import(/* webpackChunkName: "about" */ './views/invoice.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import(/* webpackChunkName: "about" */ './views/reports.vue')
    },
    {
      path: '/accounting',
      name: 'accounting',
      component: () => import(/* webpackChunkName: "about" */ './views/accounting.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import(/* webpackChunkName: "about" */ './views/setup.vue')
    }
  ]
})
