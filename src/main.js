import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由配置
import router from './plugins/router'

//配置服务端地址
import server from './config/server'
Vue.prototype.baseUrl = server.baseUrl;

import './assets/css/base.css' //全局暴露
import './assets/css/index.css' 
import './assets/js/zepto.js'
import './assets/js/flexible.js'
import './assets/js/iscroll.js'


//配置axios 配置
import './plugins/axios'

//引入动画库
import 'animate.css'

let vm = new Vue({
  render: h => h(App),
  router:router,
  data:{
    bNav:true,
    bFoot:true,
    bLoading:false
  }
}).$mount('#app')

export default vm;
