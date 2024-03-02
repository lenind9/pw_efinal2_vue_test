import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/token',
        component: () => import('@/pages/EstudianteToken')
    },
    {
        path: '/estudiante',
        component: () => import('@/pages/EstudianteGuardar')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router