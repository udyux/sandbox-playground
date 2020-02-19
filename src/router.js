import Vue from 'vue'
import Router from 'vue-router'
import * as views from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: '-active',
  routes: Object.values(views).map(component => ({ ...component.route, component })),
  scrollBehavior: ({ hash: selector }, from, savedPosition) =>
    selector ? { selector } : savedPosition || { x: 0, y: 0 }
})
