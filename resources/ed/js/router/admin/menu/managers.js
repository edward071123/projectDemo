import lazyLoading from './lazyLoading'

export default {
    path: '/managers',
    meta: {
        icon: 'fa-users',
        expanded: false,
        label: '經手人列表'
    },
    component: lazyLoading('managers', true),
    children: [
        {
            name: '經手人列表',
            path: '',
            component: lazyLoading('managers/List'),
            meta: {
                link: 'managers/List.vue',
                auth: true
            }
        },
        {
            name: '新增經手人',
            path: 'add',
            component: lazyLoading('managers/Add'),
            meta: {
                link: 'managers/Add.vue',
                auth: true
            }
        }
    ]
}
