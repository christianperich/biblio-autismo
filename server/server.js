import express from "express";
import router from "./config/routes/main.js";
import dotenv from "dotenv";
import connectDB from "./config/db/db.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
