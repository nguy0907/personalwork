import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './views/Menu.vue'

const routes = [{
 path: '/',
 component: Menu
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})
createApp(App).use(router).mount('#app')
