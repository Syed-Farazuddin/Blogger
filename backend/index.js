import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/ErrorHandler.js";
// Routes
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(invalidPathHandler);
app.use(errorResponseHandler);

const port = process.env.SECRET_PORT;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
