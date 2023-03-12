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

app.directive('click-outside', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
  });

app.mount('#app')
