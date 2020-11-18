import api from "../api/cart";

const state = {
  products: [],
  orders: [],
};

const getters = {
  cartProducts: (state) => state.products,
  orders: (state) => state.orders,
};

const actions = {
  addProductToCard({ commit, state }, product) {
    const existingProductIndex = state.products.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      commit("updateProductQuantity", existingProductIndex);
    } else {
      commit("addProduct", { ...product, quantity: 1 });
    }
  },
  deleteProductFromCart({ commit }, id) {
    commit("deleteProduct", id);
  },

  async createOrder({ commit, state }, data) {
    try {
      await api.order({ ...data, products: state.products });
      alert("Uspešna porudžbina.");
      commit("clearCart");
    } catch (e) {
      console.log(e);
    }
  },

  cancelCart({ commit }) {
    commit("clearCart");
  },

  async getOrders({ commit }) {
    try {
      const response = await api.myOrders();
      commit("setOrders", response.data);
    } catch (e) {
      console.log(e);
    }
  },

  async cancelOrder(state, id) {
    try {
      await api.cancelOrder(id);
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  addProduct: (state, product) => {
    const products = state.products;
    products.push(product);
    state.products = products;
  },
  deleteProduct: (state, id) => {
    const products = state.products.filter((item) => item.id !== id);
    state.products = products;
  },
  clearCart: (state) => {
    state.products = [];
  },
  updateProductQuantity: (state, index) => {
    const products = [...state.products];
    const product = products[index];
    products.splice(index, 1, { ...product, quantity: product.quantity + 1 });
    state.products = products;
  },
  setOrders: (state, orders) => {
    state.orders = orders;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
