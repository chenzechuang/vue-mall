import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./permission";

import "./icons";

import "./utils/rem";

const { mockXHR } = require('../mock')
mockXHR()

import vantUI from "./plugins/vant";
Vue.use(vantUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
