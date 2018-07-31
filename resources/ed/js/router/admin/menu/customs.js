import lazyLoading from './lazyLoading'

export default {
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
}
