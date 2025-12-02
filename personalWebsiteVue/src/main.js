import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


import landingPage from './views/landingPage.vue'
import homepage from './views/homepage.vue'
import aboutpage from './views/aboutpage.vue'
import services from './views/services.vue'
import contact from './views/contact.vue'
import portfolio from './views/portfolio.vue'

const routes = [{
    path: '/',
    component: landingPage
},
{
    path: '/homepage',
    component: homepage
},
{
    path: '/aboutpage',
    component: aboutpage
},
{
    path: '/services',
    component: services
},
{
    path: '/contact',
    component: contact
},
{
    path:'/portfolio',
    component: portfolio
}]

const router  = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
