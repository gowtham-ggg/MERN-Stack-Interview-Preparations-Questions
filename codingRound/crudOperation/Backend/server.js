import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/crudOperation")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.use("/user", userRoute);

app.listen(4000, () => console.log("Server running on port 4000"));
