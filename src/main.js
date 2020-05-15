import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueMeta from 'vue-meta'
// import Hotjar from 'vue-hotjar'

// Vue.use(Hotjar, {
//   id: HOTJAR_ID,
//   isProduction: true,
//   snippetVersion: 6
// })

Vue.use(VueMeta)
Vue.use(Buefy);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
