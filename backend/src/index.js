import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import problemRoutes from "./Routes/problem.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello guys welcome to leetcode");
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is runnning on ${process.env.PORT}`);
});
