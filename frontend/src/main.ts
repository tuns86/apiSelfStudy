import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue';
import './measureWebVitals.ts';
import router from './router/router.ts';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Toast);

app.mount('#app')
