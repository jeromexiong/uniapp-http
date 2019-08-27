import Vue from 'vue'
import App from './App'
import * as api from './common/service/api.js'

Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
