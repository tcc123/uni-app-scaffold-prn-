import Vue from 'vue';
import App from './App';
import Request from './plugins/request/index';

Vue.config.productionTip = false;

Vue.prototype.$http = Request();

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
