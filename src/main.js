import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
//import axios from 'axios'
Vue.config.productionTip = false

import CommonInput from './components/common/CommonInput.vue'
import CommonBar from './components/common/CommonBar.vue'
import CommonButton from './components/common/CommonButton.vue'

Vue.component('common-input', CommonInput)
Vue.component('common-bar', CommonBar)
Vue.component('common-button', CommonButton)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
