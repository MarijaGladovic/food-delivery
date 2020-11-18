import axios from "axios";

export default {
  getCategories: () => axios.get("/category"),
  getCategory: (id) => axios.get(`/category/${id}`),
};
