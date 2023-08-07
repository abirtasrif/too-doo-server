const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userShcema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userShcema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Use Strong password including uppercase, lowercase, symbol and number with minimum 8 character"
    );
  }
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await this.create({ email: email, password: hashedPass });

  return user;
};

module.exports = mongoose.model("User", userShcema);
