import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import main from '@/components/main.vue'
import myfile from '@/components/myfile.vue'
import upload from '@/components/upload.vue'
import login from '@/components/login.vue'
import download from '@/components/download.vue'

Vue.use(Router)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'brown',
  accent: 'pink',
  warn: 'red',
  background: ''
})

Vue.material.registerTheme({
  main: {
    primary: 'grey'
  },
  myfile: {
    primary: 'indigo'
  },
  download: {
    primary: 'teal'
  },
  downloaded: {
    primary: 'green'
  },
  login: {
    primary: 'blue'
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/myfile',
          name: 'myFile',
          component: myfile
        },
        {
          path: '/upload',
          name: 'upload',
          component: upload
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/download',
          name: 'download',
          component: download
        }
      ]
    }
  ]
})
