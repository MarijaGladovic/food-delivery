import faker from "faker";
import { randomNumber } from "../helpers";

const numberOfProducts = 75;
const createProduct = () => {
  return {
    name: faker.random.word(),
    description: faker.lorem.paragraphs(),
    price: faker.commerce.price(),
    image: faker.image.food(500, 300, true),
  };
};

const createProducts = (categories) => {
  const products = [];
  for (let i = 0; i < numberOfProducts; i++) {
    products.push({
      ...createProduct(),
      category: categories[randomNumber(0, categories.length)],
    });
  }

  return products;
};

export default createProducts;
