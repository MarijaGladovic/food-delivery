import Category from "../Model";

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().select("name");
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
