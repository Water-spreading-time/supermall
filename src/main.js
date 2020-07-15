import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Faskclick from 'fastclick'

Vue.config.productionTip = false

//解决移动端点击事件300ms延迟
Faskclick.attach(document.body)

//图片懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
