import connectMongo from "utils/connectMongo";
import userModel, { User } from "@/Schema/userSchema";

interface UserInput {
  id: string;
  cities: string[];
}

export const updateBookmarksService = async (
  body: UserInput
): Promise<User> => {
  try {
    await connectMongo();

    const res = await userModel.findByIdAndUpdate(
      body.id,
      { cities: body.cities },
      { new: true }
    );

    if (!res) {
      throw "User not found";
    }

    return res;
  } catch (error) {
    throw error;
  }
};
