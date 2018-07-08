import request from '../utils/request'

export function fetchNewsList() {
  return request({
    url: '/customs',
    method: 'get',
  })
}

export function createCustom(data) {
  return request({
    url: '/customs',
    method: 'post',
    data
  })
}
