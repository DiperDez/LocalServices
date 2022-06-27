
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('@/modules/pages/Home')
    },
    { 
        path: '/aboutPage', 
        component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/pages/AboutPage')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
