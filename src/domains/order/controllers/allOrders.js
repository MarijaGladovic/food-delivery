import Order from "../Model";
import jwt from "jsonwebtoken";

export const getAllUserOrders = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    if (token) {
      try {
        const { JWT_SECRET } = process.env;
        const verifiedToken = await jwt.verify(token, JWT_SECRET);
        const userOrders = await Order.find({ userId: verifiedToken.data._id });
        return res.status(200).json(userOrders);
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    next(e);
  }
};
