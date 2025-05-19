import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


import landingPage from './views/landingPage.vue'
import homepage from './views/homepage.vue'

const routes = [{
    path: '/',
    component: landingPage
},
{
    path: '/homepage',
    component: homepage
}]

const router  = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
