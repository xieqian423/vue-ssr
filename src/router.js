import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            // 异步路由组件的路由配置
            { path: '/', component: () => import('./components/Home.vue') },
            { path: '/item/:id', component: () => import('./components/Item.vue') }
        ]
    })
}