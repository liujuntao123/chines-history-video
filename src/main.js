import { createApp } from 'vue';
import App from './App.vue';
// import './components/time.css';
import 'ant-design-vue/dist/reset.css';
import { Drawer, BackTop } from 'ant-design-vue';

createApp(App).use(Drawer).use(BackTop).mount('#app');
