import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`.bgRed.white);
    }
  };
  

export default connectDB;
