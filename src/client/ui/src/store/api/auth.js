import axios from "axios";

export default {
  login: ({ email, password }) =>
    axios.post("/user/login", { email, password }),
  signup: ({ email, password, name, phone, address, zipCode }) =>
    axios.post(`/user`, { email, password, name, phone, address, zipCode }),
};
