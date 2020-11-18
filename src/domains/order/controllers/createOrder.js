import "dotenv/config";
import jwt from "jsonwebtoken";
import Order from "../Model";

export const createOrder = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    console.log(token);
    let userId = null;
    if (token) {
      try {
        const { JWT_SECRET } = process.env;
        const verifiedToken = await jwt.verify(token, JWT_SECRET);
        userId = verifiedToken.data._id;
      } catch (e) {
        console.log(e);
      }
    }

    const data = req.body;
    const order = new Order({
      userId: userId,
      address: data.address,
      phone: data.phone,
      notes: data.notes,
      price: data.price,
      products: data.products,
    });

    await order.save();

    return res.status(200).json({
      message: "Order has been created.",
    });
  } catch (e) {
    next(e);
  }
};
