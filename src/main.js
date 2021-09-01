import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $ from 'jquery';
import WOW from 'wow.js';
import App from './App.vue';
import router from './router';
import toCurrency from './assets/javascript/toCurrency';

new WOW({ live: false }).init();

window.$ = $;

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);
defineRule('min', min);

const app = createApp(App);

app.config.globalProperties.$toCurrency = toCurrency;

app.use(VueAxios, axios);
app.use(moshaToast);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(router);
app.mount('#app');
app.component('Loading', Loading);
