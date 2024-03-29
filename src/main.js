import Vue from 'vue';
import App from './App';
import Request from './plugins/request/index';
import uView from "uview-ui";

Vue.config.productionTip = false;

Vue.prototype.$http = Request();
Vue.use(uView);

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
