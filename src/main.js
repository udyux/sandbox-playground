import 'css-reset-udyux/reset.scss'
import './styles/app.scss'

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import { DOCUMENT_TITLE } from './constants'
import GlobalComponents from './components/common'

Vue.config.productionTip = false
Vue.use(GlobalComponents)
sync(store, router)

const App = {
  name: 'App',
  render: h => h('router-view'),
  watch: {
    '$route.name'(name) {
      if (name === 'Root') document.title = DOCUMENT_TITLE
      else document.title = `${DOCUMENT_TITLE} | ${name}`
    }
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
