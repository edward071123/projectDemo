import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: 'hash', // Demo is living in GitHub.io, so required!
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: '前台首頁',
            path: '/',
            component: require('../../views/shows')
        },
        {
            name: 'error',
            path: '/*',
            component: require('../../views/error')
        },
    ]
})

