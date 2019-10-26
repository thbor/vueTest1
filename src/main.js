//主页面配置的主入口。主要是利用es6的模块化引入模块
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from "moment"
Vue.prototype.$moment = moment
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
import VueResource from 'vue-resource'
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  components: { App },   /* 注册引入的组件App.vue */
  template: '<App/>'   /* 给Vue实例初始一个App组件作为template 相当于默认组件 */
})


