import Order from "../Model";

export const getOrderDetails = async (req, res, next) => {
  const orderID = req.params["ID"];
  try {
    const order = await Order.findById(orderID);
    return res.status(200).json(order);
  } catch (e) {
    next(e);
  }
};
