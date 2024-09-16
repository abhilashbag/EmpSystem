import express from "express";
import EmployeeControllers from "../controllers/EmployeeControllers.js";
import { createEmployee } from "../controllers/CreateEmployee.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Getting all emoloyee Data
router.get("/", EmployeeControllers.getAllEmployees);

//Getting Emloyee data from user
router.post(
  "/register",
  upload.single("image"), // Middleware to handle file upload
  createEmployee // Controller to handle form submission
);

//Updating Employee
router.put("/:id", EmployeeControllers.updateEmployee);

//Deleting Employee
router.delete("/:id", EmployeeControllers.deleteEmployee);

export default router;
