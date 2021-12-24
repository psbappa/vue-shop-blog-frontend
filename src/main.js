import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

library.add(fas)

const app = createApp(App).component('fa', FontAwesomeIcon)
app.use(VueFusionCharts, FusionCharts, Charts);         //available from everywhere in your app.
app.use(router)
app.use(store)

app.mount('#app')
