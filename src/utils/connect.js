import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connect Successfully!");
  } catch (err) {
    console.log("Error While Connecting!", err);
  }
};
