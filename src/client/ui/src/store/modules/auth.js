import api from "../api/auth";
import router from "@/router";

const state = {
  user: null,
};

const getters = {
  user: (state) => state.user,
};

const actions = {
  async loginUser({ commit }, { email, password }) {
    try {
      const response = await api.login({ email, password });
      commit("setUser", response.data.user);
      localStorage.setItem("auth:token", response.data.token);
      router.replace("/"); // redirekt na homepage
    } catch (e) {
      console.log(e);
    }
  },

  async signupUser(store, { email, password, name, phone, address, zipCode }) {
    try {
      await api.signup({
        email,
        password,
        name,
        address,
        phone,
        zipCode,
      });

      router.replace("/login");
    } catch (e) {
      console.log(e);
    }
  },

  logout({ commit }) {
    commit("deleteUser");
    localStorage.removeItem("auth:token");
    router.replace("/");
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  deleteUser: () => {
    state.user = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
