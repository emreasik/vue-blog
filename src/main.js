import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
