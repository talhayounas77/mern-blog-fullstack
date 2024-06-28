import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from "./routes/user.routes.js";
import authroutes from "./routes/auth.routes.js"

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
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`this is working on port ${port}`);
});

app.use("/api/user",userroutes)
app.use("/api/auth",authroutes)


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message:message,
  })
})