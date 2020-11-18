import express from "express";
import { userSignup, userLogin } from "./controllers";

const router = express.Router();

router.post("/", userSignup);
router.post("/login", userLogin);

export default router;
