import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`this is working on port ${port}`);
});

app.use("/api/user",routes)
