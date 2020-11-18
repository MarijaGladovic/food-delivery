import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "Opis za trenutnu kategoriju nije dostupan.",
    },
  },
  { timestamp: true }
);

export default model("category", categorySchema);
