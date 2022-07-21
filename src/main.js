import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/router';

const url = 'http://localhost/LocalServicesAPI/api/'
export default url;

createApp(App)
    .use(router)    
    .mount('#app')


