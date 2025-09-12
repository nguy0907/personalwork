import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './views/Menu.vue'
import Gamemode from './views/Gamemode.vue'
import Settings from './views/Settings.vue'
import QuickGame from './views/gamemodeMenu/QuickGame.vue'
import expansionMode from './views/gamemodeMenu/expansionMode.vue'


//Data
const $AHL = document.getElementById('leaguesAway')
const $AHLTeams = ["Ontario Reigns","San Diego Gulls"]

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
},
{
path: '/Gamemode/QuickGame',
component: QuickGame
},
{
    path: '/Gamemode/expansionMode',
component: expansionMode
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})
createApp(App).use(router).mount('#app')
