import express from "express";
import cors from "cors";
import path from "path";

//  const express = require("express"); => starija sintaksa

//  routers
import { productRouter } from "./domains/product";
import { orderRouter } from "./domains/order";
import { userRouter } from "./domains/user";
import { categoryRouter } from "./domains/category";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);

//  app.use(express.static(path.join(__dirname, "client/ui/dist")));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

export default app;

//  zahtev => server => binarni format => express.json(binarniFormat) => json => zahtevu
