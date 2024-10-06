import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await createdUser.save(); // Ensure this is awaited

    res.status(200).json({
      message: "Registration successful",
      user: {
        _id: createdUser._id,
        fullName: createdUser.fullName,
        password: createdUser.password,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const pasMatch = await bcrypt.compare(password, user.password);
    if (!user || !pasMatch) {
      return res.status(400).json({ message: "Invalid cradential" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
