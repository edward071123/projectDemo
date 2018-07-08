require('./bootstrap')

import Vue from 'vue'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync';
import Admin from './views/Admin.vue';
import Show from './views/Show.vue';
import adminRouter from './router/admin/';
import showRouter from './router/show/';
import store from './store';
import * as filters from './filters';
import { TOGGLE_SIDEBAR } from 'vuex-store/modules/app';

import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from './utils/request';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(NProgress);

// Enable devtools
Vue.config.devtools = true;

if (window.location.pathname == '/admin') { 
    sync(store, adminRouter);

    const nprogress = new NProgress({ parent: '.nprogress-container' });
    const { state } = store;

    adminRouter.beforeEach((route, redirect, next) => {
        if (state.app.device.isMobile && state.app.sidebar.opened) {
            store.commit(TOGGLE_SIDEBAR, false)
        }
        next()
    })

    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
    Vue.router = adminRouter
    Vue.use(require('@websanova/vue-auth'), {
        auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
        http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
        router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    });
    const app = new Vue({
        router:adminRouter,
        store,
        nprogress,
        ...Admin
    })
    app.$mount('#app');
} else {
    const app = new Vue({
        router: showRouter,
        ...Show
    })
    app.$mount('#app');
}



