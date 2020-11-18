import Product from "../Model";

export const getProduct = async (req, res, next) => {
  const productID = req.params["ID"];
  try {
    const product = await Product.findById(productID);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
