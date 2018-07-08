import lazyLoading from './lazyLoading'
import charts from './charts'
import uifeatures from './uifeatures'
import components from './components'
import tables from './tables'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      path: '/customs',
      meta: {
        icon: 'fa-users',
        expanded: false,
        label: '客戶列表'
      },
      component: lazyLoading('customs', true),
      children: [
        {
          name: '客戶列表',
          path: '',
          component: lazyLoading('customs/List'),
          meta: {
            link: 'customs/List.vue',
            auth: true
          }
        },
        {
          name: '新增客戶',
          path: 'addcustom',
          component: lazyLoading('customs/AddCustom'),
          meta: {
            link: 'customs/AddCustom.vue',
            auth: true
          }
        }
      ]
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer',
        link: 'dashboard/index.vue',
        auth: true
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'Axios',
      path: '/axiosDemo',
      meta: {
        icon: 'fa-rocket',
        link: 'axios/index.vue'
      },
      component: lazyLoading('axios', true)
    },
    charts,
    uifeatures,
    components,
    tables
  ]
}


export default {
  state
}
