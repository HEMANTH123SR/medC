import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`mongoDB connnected:${res.connection.db.databaseName}`);
  } catch (err) {
    console.log(`mongoDB connection error: ${err}`);
  }
};
