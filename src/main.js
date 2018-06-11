// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueRouter from 'vue-router'
// import 'iview/dist/styles/iview.css';
import './assets/mytheme/index.less'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})






