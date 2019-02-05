import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
//import axios from 'axios'
Vue.config.productionTip = false

import CommonInput from './components/common/CommonInput.vue'
import CommonBar from './components/common/CommonBar.vue'
import CommonButton from './components/common/CommonButton.vue'
import CommonError from './components/common/CommonError.vue'

Vue.component('common-input', CommonInput)
Vue.component('common-bar', CommonBar)
Vue.component('common-button', CommonButton)
Vue.component('common-error', CommonError)

import mixin from './mixin/mixin.js'
Vue.mixin(mixin); 

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
