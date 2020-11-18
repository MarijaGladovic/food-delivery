import axios from "axios";

const token = localStorage.getItem("auth:token");
export default {
  order: ({ userId, name, address, phone, notes, products, price }) =>
    axios.post(
      "/order",
      { userId, name, address, phone, notes, products, price },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
  myOrders: () =>
    axios.get("/order", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  cancelOrder: (id) => axios.patch(`/order/cancel/${id}`),
};
