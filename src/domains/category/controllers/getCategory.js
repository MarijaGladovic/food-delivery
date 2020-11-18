import Category from "../Model";
import Product from "../../product";

export const getCategory = async (req, res, next) => {
  const categoryID = req.params["ID"];
  try {
    const category = await Category.findById(categoryID).select(
      "name description"
    );
    console.log(category);
    const categoryProducts = await Product.find({ category: categoryID });

    return res.status(200).json({
      _id: category._id,
      name: category.name,
      description: category.description,
      products: [...categoryProducts],
    });
  } catch (error) {
    next(error);
  }
};
