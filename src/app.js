// Global imports
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

// Local imports
import App from './App.vue';
import routes from './router';

// Prototyping
Vue.prototype.$http = axios;
Vue.prototype.$db = Container.db;
Vue.prototype.$electron = Container.electron;

Vue.use(VueRouter);
let router = new VueRouter(routes);

new Vue({
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')