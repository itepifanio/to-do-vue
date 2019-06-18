import Vue from 'vue/dist/vue'
import router from './router'
import App from './App.vue'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })

// new Vue({
//     router
    // render: h => h(App),
// }).$mount('#app');
