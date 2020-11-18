import api from "../api/categories";

const state = {
  categories: [],
  activeCategory: [],
};

const getters = {
  categories: (state) => state.categories,
  activeCategory: (state) => state.activeCategory,
};

const actions = {
  async getCategories({ commit }) {
    try {
      const response = await api.getCategories();
      commit("setCategories", response.data);
    } catch (e) {
      console.log(e);
    }
  },

  async getCategory({ commit }, id) {
    try {
      const response = await api.getCategory(id);
      commit("setActiveCategory", response.data);
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setActiveCategory: (state, category) => {
    state.activeCategory = category;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
