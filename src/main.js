import Vue from 'vue/dist/vue'
import router from './router'

Vue.config.productionTip = false;

new Vue({
    router
    // render: h => h(App),
}).$mount('#app');
