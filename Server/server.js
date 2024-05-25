import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import colors from "colors";
import UserRoute from "./routes/userRoute.js";

//dotenv conig
dotenv.config();
//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/auth", UserRoute);
// connection db

const connect = await mongoose.connect(process.env.MONGO_URL);
console.log(`Mongo db is connected to ${connect.connection.host}`.bgCyan.white);

//port
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgMagenta.white);
});
