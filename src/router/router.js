
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'inicio',
        component: () => import('@/modules/pages/Home')
    },
    { 
        path: '/servicios', 
        name: 'servicios',
        component: () => import(/* webpackChunkName: "ServiciosPage" */'@/modules/pages/ServiciosPage')
    },
    { 
        path: '/acercaDe', 
        name: 'acercaDe',
        component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/pages/AcercaDePage')
    },
    { 
        path: '/registro', 
        name: 'registro',
        component: () => import(/* webpackChunkName: "RegistroPage" */'@/modules/pages/RegistroPage')
    },
    { 
        path: '/administrador', 
        name: 'administrador',
        component: () => import(/* webpackChunkName: "RegistroDatosPage" */'@/modules/layouts/AdministradorPanel'),
        children: [
            { 
                path: '/administrador/estados', 
                name: 'estados',
                component: () => import(/* webpackChunkName: "EstadosPage" */'@/modules/pages/admin/Estados')
            },
            { 
                path: '/administrador/oficio', 
                name: 'oficio',
                component: () => import(/* webpackChunkName: "EstadosPage" */'@/modules/pages/admin/RegistroDatos')
            },
            { 
                path: '/administrador/metodoPago', 
                name: 'metodoPago',
                component: () => import(/* webpackChunkName: "MetodoPagoPage" */'@/modules/pages/admin/MetodoPago')
            },
            { 
                path: '/administrador/categoriaOficio', 
                name: 'registro',
                component: () => import(/* webpackChunkName: "CategoriOficioPage" */'@/modules/pages/admin/CategoriaOficio')
            },
        ]
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
