import { createRouter, createWebHashHistory } from "vue-router"


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/IndexPage.vue')
        },
        {
            path: '/about',
            component: () => import('@/pages/AboutPage.vue')
        },
    ]
})