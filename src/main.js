// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// -----------phoenix-start------------
//vue移动端适配
import 'lib-flexible'
//axios请求数据
import axios from 'axios';
import qs from 'qs';
Vue.prototype.axios = axios ;   //全局注册，使用方法为:this.axios
Vue.prototype.qs = qs ;          //全局注册，使用方法为:this.qs
//获取地址栏中的参数
import utils from './assets/scripts/utils'
Vue.prototype.utils = utils // main.js中全局引入
//vue图片懒加载
import VueLazyload from 'vue-lazyload'
//直接使用
// Vue.use(VueLazyload)
//添加自定义选项
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../static/img/error.png',
    loading: '../static/img/load.gif',
    attempt: 1
})

//------------phoenix-end------------

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
