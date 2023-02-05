import connectMongo from "utils/connectMongo";
import userModel, { User } from "@/Schema/userSchema";

interface UserInput {
  username: string;
  email: string;
  password: string;
}

export const createUserService = async (body: UserInput): Promise<User> => {
  try {
    await connectMongo();

    const newUser = new userModel({ ...body });
    await newUser.validate();

    const res = await newUser.save();

    if (!res) {
      throw "Something went wrong";
    }

    return res;
  } catch (error) {
    throw error;
  }
};
