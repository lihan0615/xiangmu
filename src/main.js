import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
