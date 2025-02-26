import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import './measureWebVitals.ts';
import router from './router/router.ts';

const app = createApp(App);

app.use(router);

app.mount('#app')
