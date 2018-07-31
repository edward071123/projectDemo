import request from '../utils/request'

export function fetchMangerList() {
    return request({
        url: '/managers',
        method: 'get',
    })
}

export function createManger(data) {
    return request({
        url: '/managers',
        method: 'post',
        data
    })
}
