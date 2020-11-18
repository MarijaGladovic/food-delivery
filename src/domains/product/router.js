import express from "express";
import { getProducts, getProduct } from "./controllers";

const router = express.Router();

router.get("/", getProducts); // all products
router.get("/:ID", getProduct); // single product

export default router;
