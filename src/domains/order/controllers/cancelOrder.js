import Order from "../Model";

export const cancelOrder = async (req, res, next) => {
  try {
    const orderID = req.params["ID"];
    const orderToCancel = await Order.findById(orderID);
    orderToCancel.status = "canceled";

    await orderToCancel.save();

    return res.status(200).json({
      message: "Order canceled.",
    });
  } catch (e) {
    next(e);
  }
};
