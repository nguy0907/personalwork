import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './views/Menu.vue'
import Gamemode from './views/Gamemode.vue'
import Settings from './views/Settings.vue'

const routes = [{
 path: '/',
 component: Menu
},
{
    path: '/Gamemode/',
    component: Gamemode
},
{
    path: '/Settings/',
    component: Settings
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})
createApp(App).use(router).mount('#app')
