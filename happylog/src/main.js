import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import MessageSection from './components/MessageSection'
import ListadoMessages from './components/ListadoMessages'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import vueClickOutsideElement from 'vue-click-outside-element'

library.add(faChevronDown, faCircleUser)
const routes = [
    
        {path:"/", component:MessageSection},
        {path:"/listado", component:ListadoMessages}
        
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(vueClickOutsideElement)

app.mount('#app')
