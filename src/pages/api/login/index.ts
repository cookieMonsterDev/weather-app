import { loginAsUserService } from "@/services/LoginAsUserService";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "utils/connectMongo";

const loginAsUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()

    const user = await loginAsUserService(req.body);

    res.status(200).json({
      isError: false,
      res: user,
    });
  } catch (error) {
    res.status(200).send({
      isError: true,
      res: error,
    });
  }
};

export default loginAsUser;
