import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false,
      default: null,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    products: [{}],
    status: {
      type: String,
      required: false,
      default: "active",
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("order", orderSchema);
