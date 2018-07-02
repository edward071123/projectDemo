import Vue from 'vue'
import axios from 'axios'
import Notification from 'vue-bulma-notification'

const NotificationComponent = Vue.extend(Notification)
const openNotification = (
    propsData = {
        title: '',
        message: '',
        type: '',
        direction: '',
        duration: 4500,
        container: '.notifications'
    }) => {
    return new NotificationComponent({
        el: document.createElement('div'),
        propsData
    })
}

// create an axios instance
const service = axios.create({
    baseURL: "/api", // api的base_url
    timeout: 5000, // request timeout
})

// respone interceptor
service.interceptors.response.use(
    response => response,
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '請求錯誤'
                    break
                case 401:
                    error.message = '請登錄'
                    break
                case 403:
                    error.message = '拒絕訪問'
                    break
                case 404:
                    error.message = 'api網址出錯'
                    break
                case 408:
                    error.message = '連線逾時'
                    break
                case 500:
                    error.message = 'server錯誤'
                    break
                case 501:
                    error.message = '標頭值指定未實作的設定'
                    break
                case 502:
                    error.message = 'Web 伺服器在作為閘道或 Proxy 時收到無效的回應。 '
                    break
                case 503:
                    error.message = '服務無法使用'
                    break
                case 504:
                    error.message = '閘道逾時'
                    break
                case 505:
                    error.message = '不支援的 HTTP 版本'
                    break
                default:
            }
        }
        openNotification({
            title: '錯誤',
            message: error.message,
            type: 'danger'
        })
        return Promise.reject(error)
    })

export default service