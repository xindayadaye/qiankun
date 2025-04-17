// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  qiankunWindow,
  renderWithQiankun,
  type QiankunProps,
} from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

let app: any

function render(props: QiankunProps) {
  console.log(qiankunWindow)

  app = createApp(App)

  app.use(createPinia())
  app.use(router)
  if (props?.baseRouter) {
    app.provide('baseRouter', props?.baseRouter)
  }
  if (props?.actions) {
    app.provide('actions', props?.actions)
  }
  app.provide('isQiankun', qiankunWindow.__POWERED_BY_QIANKUN__)
  app.provide('location', qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__.slice(0, -1) || '')
  app.mount(props?.container ? props?.container : '#app')
}

function qiankunStart() {
  renderWithQiankun({
    bootstrap() {},
    mount(props) {
      render(props)
    },
    update(props) {
      render(props)
    },
    unmount() {
      app?.unmount()
      app = null
    },
  })
}
qiankunWindow.__POWERED_BY_QIANKUN__ ? qiankunStart() : render({})
