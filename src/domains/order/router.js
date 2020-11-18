import express from "express";
import {
  createOrder,
  getOrderDetails,
  getAllUserOrders,
  cancelOrder,
} from "./controllers";

const router = express.Router();

router.get("/", getAllUserOrders); // all orders for user
router.get("/:ID", getOrderDetails); // single order details
router.post("/", createOrder); // create order
router.patch("/cancel/:ID", cancelOrder);

export default router;
