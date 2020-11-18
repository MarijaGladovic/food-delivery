import "dotenv/config";
import { connect } from "mongoose";
import Category from "../../domains/category";
import Product from "../../domains/product";
import createProducts from "./createProducts";
import createCategories from "./createCategories";

const { DBLINK } = process.env;

connect(DBLINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    try {
      await Category.deleteMany();
      const categories = await Category.insertMany(createCategories());

      await Product.deleteMany();
      const products = await Product.insertMany(
        createProducts(categories.filter((c) => c._id))
      );

      console.log("Done");
      process.exit();
    } catch (error) {
      console.log("An error has occured");
      console.log("ERROR => ", error);
      process.exit();
    }
  })
  .catch((error) => {
    console.log("An error has occured while connection to DB in seed mode.");
    console.log("ERROR => ", error);
  });
