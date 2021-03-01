import { createApp } from 'vue';
import App from './App.vue';

// App
const app = createApp(App);

// axios
import axios from './utils/axios';
app.config.globalProperties.$http = axios;

// Global Style Reset
// import 'normalize.css';
import './assets/style/global.less';

// Router
import Router from './router';
app.use(Router);

// store
import store, { fundStoreKey } from './store';
app.use(store, fundStoreKey);

// Element Plus
import ElementPlus from 'element-plus';
import './assets/fund-theme/index.css';

app.use(ElementPlus, {
  size: 'small',
});

// Mount
app.mount('#app');
