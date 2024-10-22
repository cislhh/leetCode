
// 1.引入创建路由需要的组件
import { createRouter, createWebHistory } from 'vue-router'

// 2.配置系统所有路由页面，浏览器通过path路径加载对应组件
const routes = [
    { path: '/removeDuplicates', component: () => import('@/views/removeDuplicates.vue') },
    { path: '/majorityElement', component: () => import('@/views/majorityElement.vue') }
]

// 3.创建路由实例
const router = createRouter({
    history: createWebHistory(), //使用history模式，hash模式使用 createWebHashHistory() 方法
    routes
})

// 4.声明,为路由提供外部引用的入口
export default router

