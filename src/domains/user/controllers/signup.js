import bcrypt from "bcryptjs";
import User from "../Model";

export const userSignup = async (req, res, next) => {
  try {
    const data = req.body;
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      throw new Error("Email in use.");
    }

    const passwordHash = await bcrypt.hash(data.password, 12);
    if (!passwordHash) {
      throw new Error("An error occured.");
    }

    const user = new User({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      zipCode: data.zipCode,
      password: passwordHash,
    });

    await user.save();
    return res.status(200).json({
      message: "Success signup.",
    });
  } catch (e) {
    next(e);
  }
};
