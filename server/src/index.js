import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import EmployeeRouter from "./routes/EmployeeRoutes.js";
import connectDB from "./database.js";

dotenv.config();
connectDB();

const App = express();
const port = process.env.PORT || 4000;

App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.get("/", (res, req) => {
  res.send({ message: "This is main route home." });
});

App.use("/employee", EmployeeRouter);

App.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`);
});
