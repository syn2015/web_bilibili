import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant组件
import vant from 'vant'
import {Toast} from 'vant'
// 引入vant组件的样式
import 'vant/lib/index.css';
import http from '../http'
import '@/assets/style.css'
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
// 使用vant
Vue.use(vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
