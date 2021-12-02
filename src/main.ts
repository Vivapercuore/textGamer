import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import router from './router.ts'

import store from './store/index'

import App from './App.vue'


const app = createApp(App)

app.use(store)
app.use(router)
// app.use(ElementPlus)

router.isReady().then(() => app.mount('#app'))
