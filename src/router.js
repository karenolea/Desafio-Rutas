// importacion librerías
import Vue from 'vue';
import Router from 'vue-router';

// Importacion de componentes

import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio,
        name: 'inicio'
    },
    {
        path: '/SobreMi',
        component: SobreMi,
        name: 'SobreMi'
    },
    {
        path: '/Contacto',
        component: Contacto,
        name: 'sobremi',

    },
    {
        path: '/Post',
        component: Post,
        name: 'Post',
        children: [
            {
                path: ':articulo',
                component: Articulo,
                name: 'Articulo',
            }
        ]
    },

    {
        path: '*',
        component: NotFound,
        
    },

    ]
})