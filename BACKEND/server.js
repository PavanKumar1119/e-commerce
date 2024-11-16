import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";
import { connectCloudinary } from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config();

//App config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
// Allow CORS for the frontend domain
app.use(
  cors({
    origin: [
      "https://foreverstore-admin.vercel.app",
      "https://foreverstore.vercel.app",
    ], // Add all allowed frontend URLs
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // If using cookies/auth tokens
  })
);
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT " + PORT);
});
