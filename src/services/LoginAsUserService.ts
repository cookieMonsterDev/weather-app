import connectMongo from "utils/connectMongo";
import userModel, { User } from "@/Schema/userSchema";

interface UserInput {
  email: string;
  password: string;
}

export const loginAsUserService = async (body: UserInput): Promise<User> => {
  try {
    await connectMongo();

    const res = await userModel.findOne({
      email: body.email,
      password: body.password,
    });

    if(!res) {
      throw 'Wrong email or password'
    }

    return res;
  } catch (error) {
    throw error;
  }
};
