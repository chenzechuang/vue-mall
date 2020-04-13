import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./icons";
import "../mock";

import "./util/rem";

import vantUI from "./plugins/vant";
Vue.use(vantUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
