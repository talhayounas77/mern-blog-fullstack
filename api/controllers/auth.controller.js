import user from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ error: "Please fill all the fields" });
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
    res.status(500).json({ message: error.message });
  }
};
