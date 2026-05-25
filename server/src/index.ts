import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js";
import axios from "axios";
import Razorpay from "razorpay";
import aiRoutes from "./routes/ai.js";
import paymentRoutes from "./routes/payment.js";

dotenv.config();
const url = process.env.URL as string;
const interval = 30000;
function reloadWebsite() {
  axios
  .get(url)
  .then((response) => {
    console.log("website reloded");
  })
  .catch((error) => {
    console.error(`Error : ${error.message}`);
  });
}
setInterval(reloadWebsite, interval);

await connectDB();
export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key!,
  key_secret: process.env.Razorpay_Secret!,
});
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/user", userRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
