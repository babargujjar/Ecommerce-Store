import mongoose from "mongoose";

async function dbconnect() {
    try {
      if (mongoose.connection.readyState >= 1) {
        return;
      }
  
      await mongoose.connect("mongodb://127.0.0.1:27017/my-store", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process if the connection fails
    }
  }
  dbconnect()
  export default dbconnect;
  