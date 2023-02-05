import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const url = process.env.MONGO_URL!
    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    console.log('DataBase is connected')
  } catch (error) {
    throw new Error(`Failed to connect DataBase: ${error}`);
  }
}

export default connectMongo;