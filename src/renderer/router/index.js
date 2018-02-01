import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route =
[
  {
    path: '/',
    name: '登录',
    icon: 'desktop_windows',
    component: require('@/components/login').default
  },
  {
    path: '/myFiles',
    name: '我的网盘',
    icon: 'cloud_done',
    component: require('@/components/myFiles').default
  },
  {
    path: '/download',
    name: '下载列表',
    icon: 'file_download',
    component: require('@/components/downloadFiles').default
  },
  {
    path: '/uploadFiles',
    name: '上传列表',
    icon: 'file_upload',
    component: require('@/components/uploadFiles').default
  },
  {
    path: '/about',
    name: '关于',
    icon: 'info',
    component: require('@/components/about').default
  }
]

export default new Router({
  routes: route
})

Vue.prototype.$customRoute = route
