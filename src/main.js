import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


library.add(fas)

createApp(App)
  .use(router)
  .use(store)
  .use(VueFusionCharts, FusionCharts, Charts)                       //available from everywhere in your app.
  .component('fa', FontAwesomeIcon)
  .use(VueToast)
  .mount("#app");
