import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Model";

const { JWT_SECRET } = process.env;

export const userLogin = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User.findOne({ email: data.email });

    if (!user) {
      throw new Error("Invalid credentials.");
    }

    console.log(user);

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      throw new Error("An error occured");
    }

    const token = jwt.sign({ data: user }, JWT_SECRET, { expiresIn: "3h" });
    return res.status(200).json({
      message: "Login successfull",
      token,
      user,
    });
  } catch (e) {
    next(e);
  }
};
