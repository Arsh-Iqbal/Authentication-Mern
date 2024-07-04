import express from "express";
import mongoose from "mongoose";
import authRoutes from './routes/authRoute.js';
import userRoutes from "./routes/userRoute.js"
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});