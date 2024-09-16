import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { url } from "inspector";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    // if (localfilepath) console.log("file i got it");

    //upload file
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    if (response) console.log("reponse i got ");
    //successful message
    console.log(
      "file uploaded to cloudinary Successfully",
      response.secure_url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localfilepath); //remove temp file

    console.log("error ");
    return null;
  }
};

export default uploadOnCloudinary;
