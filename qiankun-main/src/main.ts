import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun'

import App from './App.vue'
import router from './router'
import actions from './actions'

const app = createApp(App)

app.use(createPinia())
app.use(router)

registerMicroApps([
  // {
  //   name: 'react-demo', // app name registered
  //   entry: '//localhost:7101',
  //   container: '#routerMain',
  //   activeRule: '/react-demo',
  //   props: {
  //     baseRouter: router,
  //   },
  // },
  {
    name: 'vue-demo',
    entry: '//localhost:7102',
    container: '#routerMain',
    activeRule: '/vue-demo',
    props: {
      baseRouter: router,
      actions,
    },
  },
])
app.mount('#app')
// 放在mount后
start({
  prefetch: false,
  sandbox: {
    experimentalStyleIsolation: true,
  },
})
