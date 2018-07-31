import lazyLoading from './lazyLoading'
import charts from './charts'
import managers from './managers'
import customs from './customs'
import uifeatures from './uifeatures'
import components from './components'
import tables from './tables'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    managers,
    customs,
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
