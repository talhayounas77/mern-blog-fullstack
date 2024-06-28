import user from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({ error: "Please fill all the fields" });
    next(errorHandler (400,"All Fields are required"))
  }

  const hashpassword = bcryptjs.hashSync(password, 10);

  const newUser = new user(
    { 
      username,
       email, 
       password:hashpassword,

       }
      );
  try {
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
     next(error)
  }
};
