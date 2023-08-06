const express = require("express");
import { loginUser, signupUser } from "../controllers/userController";

const router = express.Router();

//login
router.post("/login", loginUser);

//signUp
router.post("/signup", signupUser);

module.exports = router;
