import Vuex from "vuex";
import Vue from "vue";

import category from "./modules/category";
import cart from "@/store/modules/cart";
import auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    cart,
    auth,
  },
});
