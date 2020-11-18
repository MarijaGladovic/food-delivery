import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuelidate);

axios.defaults.baseURL = "http://localhost:4000";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
