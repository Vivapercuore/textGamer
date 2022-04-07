
import * as VueRouter from 'vue-router'


import helloWorld from './page/HelloWorld.vue'
import create from './page/create.vue'
import play from './page/play.vue'


import Test from './page/Test.vue'



const routes = [
    {
        path: '/create/:scenarioName',
        component: create,
        name: "create",
        props: true
    },
    {
        path: '/play',
        component: play,
        name: "play"
    },
    {
        path: '/',
        component: helloWorld,
        name: "HelloWorld"
    },
    {
        path: '/test',
        component: Test,
        name: "test"
    },
]


const router = VueRouter.createRouter({
    //  内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router