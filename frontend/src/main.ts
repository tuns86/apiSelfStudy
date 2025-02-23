import './assets/main.css';

import { createApp } from 'vue';

import { searchCompanies } from './api.ts';
import App from './App.vue';

console.log(searchCompanies("tsla"));

const app = createApp(App)

// app.use(router)

app.mount('#app')
