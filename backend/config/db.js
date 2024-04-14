import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Database successfully connected");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
