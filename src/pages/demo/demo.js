// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Element from 'element-ui'
import store from './store/index.js'
import pageConfig from "@/cmpts/vueConfig.js"
import VueLocalStorage from 'vue-localstorage'

import 'reset.css'
import '../../assets/css/reset.less'
import '../../assets/css/common.less'

Vue.use(pageConfig)
Vue.use(Element)
Vue.use(VueLocalStorage, {
    name: 'vlstore',
    bind : true
})
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus
        }
    }
})
Vue.config.productionTip = false
const rootVm = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
export default rootVm
