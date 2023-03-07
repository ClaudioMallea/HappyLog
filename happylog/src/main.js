import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router'

import MessageSection from './components/MessageSection'
import ListadoMessages from './components/ListadoMessages'
const routes = [
    
        {path:"/", component:MessageSection},
        {path:"/listado", component:ListadoMessages}
        
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')
