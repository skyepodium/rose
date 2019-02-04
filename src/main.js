import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
//import axios from 'axios'
Vue.config.productionTip = false

import Input from './components/common/Input.vue'
import AppBar from './components/common/AppBar.vue'

Vue.component('common-input', Input)

Vue.component('common-AppBar', AppBar)
//Vue.use(axios)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
