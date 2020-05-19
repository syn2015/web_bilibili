import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant组件
import vant from 'vant'
// 按需加载vant的toast组件
import {Toast} from 'vant'
// 引入vant组件的样式
import 'vant/lib/index.css';
// 引入axios实例
import http from '../http'
import '@/assets/style.css'
// 全局挂载axios
Vue.prototype.$http = http
// 全局挂载toast
Vue.prototype.$msg = Toast
// 使用vant
Vue.use(vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
