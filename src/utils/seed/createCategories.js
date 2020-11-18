import faker from "faker";
import { randomNumber } from "../helpers";

const numberOfCategories = 5;
const categoriesNames = ["Doručak", "Ručak", "Večera", "Dezert", "Predjelo"];
const createCategory = (i) => {
  return {
    name: categoriesNames[i],
    description: faker.lorem.paragraphs(),
  };
};

const createCategories = () => {
  const categories = [];
  for (let i = 0; i < numberOfCategories; i++) {
    categories.push({
      ...createCategory(i),
    });
  }

  return categories;
};

export default createCategories;
