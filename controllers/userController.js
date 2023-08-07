const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, "process.env.SECRET", { expiresIn: "7d" });
};

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ email: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
