import request from '../utils/request'

export function fetchNewsList() {
  return request({
    url: '/customs',
    method: 'get',
  })
}
