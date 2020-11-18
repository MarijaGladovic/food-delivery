import express from "express";
import { getCategories, getCategory } from "./controllers";

const router = express.Router();

router.get("/", getCategories); // all categories
router.get("/:ID", getCategory); // single category with products

export default router;
