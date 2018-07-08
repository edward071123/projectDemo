import Vue from 'vue';
import Router from 'vue-router';
import menuModule from './menu'

Vue.use(Router);

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: '首頁',
      path: '/',
      component: require('../../views/Home'),
      meta: {
        auth: true
      }
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '/register',
      name: 'register',
      component: require('../../views/auth/Register'),
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: require('../../views/auth/Login'),
      meta: {
        auth: false
      }
    },
    {
      name: 'error',
      path: '/*',
      component: require('../../views/error')
    },
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
