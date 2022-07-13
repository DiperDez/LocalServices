
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('@/modules/pages/Home')
    },
    { 
        path: '/servicios', 
        component: () => import(/* webpackChunkName: "ServiciosPage" */'@/modules/pages/ServiciosPage')
    },
    { 
        path: '/acercaDe', 
        component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/pages/AcercaDePage')
    },
    { 
        path: '/registro', 
        component: () => import(/* webpackChunkName: "RegistroPage" */'@/modules/pages/RegistroPage')
    },
    { 
        path: '/registroDatos', 
        component: () => import(/* webpackChunkName: "RegistroDatosPage" */'@/modules/pages/RegistroDatos')
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
