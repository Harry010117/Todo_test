import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import moment from 'moment'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
moment.locale('ko')
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
