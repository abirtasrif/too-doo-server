const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
