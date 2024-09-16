import path from "path";
import fs from "fs/promises"; // Use promises API for fs
import Employee from "../models/Employee.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { ApiError } from "../utils/ApiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Create New Employee with Image Upload
async function createEmployee(req, res) {
  try {
    console.log("File path to upload:", req.file.path);

    if (!req.file || !req.file.path) {
      throw new ApiError(400, "No upload File found in locartion.");
    }

    const url = await uploadOnCloudinary(req.file.path, {
      folder: "../public/temp",
    });
    console.log("Cloudinary upload result:", url);

    if (!url || !url.secure_url) {
      throw new ApiError(404, "Failed to upload image to Cloudinary");
    }

    const employee = new Employee({
      ...req.body,
      image: url.secure_url,
    });
    //Deleting file from our server
    // await fs.unlink(req.file.path);

    //creating a new employee object and saving to database
    const newEmployee = await employee.save();
    res.status(201).json({ message: "user created successfull", newEmployee });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in creating employee: ", error);
  }
}

export { createEmployee };
