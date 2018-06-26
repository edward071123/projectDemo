import Vue from 'vue'
import NProgress from 'vue-nprogress'
import {sync} from 'vuex-router-sync';
import App from './views/App.vue';
import router from './router';
import store from './store';
import * as filters from './filters';
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types';

import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
axios.defaults.baseURL = '/api';
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(NProgress);

// Enable devtools
Vue.config.devtools = true;

sync(store, router);

const nprogress = new NProgress({parent: '.nprogress-container'});

const {state} = store;

router.beforeEach((route, redirect, next) => {
    if (state.app.device.isMobile && state.app.sidebar.opened) {
        store.commit(TOGGLE_SIDEBAR, false)
    }
    next()
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

const app = new Vue({
    router ,
    store,
    nprogress,
    ...App
})

export {app, router, store}
