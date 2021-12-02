
import * as VueRouter from 'vue-router'


import HelloWorld from './page/HelloWorld.vue'
import create from './page/create.vue'





const routes = [
    { path: '/', component: HelloWorld },
    { path: '/create', component: create },
]


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router