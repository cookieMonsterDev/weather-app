
import type { NextApiRequest, NextApiResponse } from "next";
import { createUserService } from "@/services/CreateUserService";

const RegisterUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await createUserService(req.body);
    res.status(200).json({
      isError: false,
      res: user
    });
  }
  catch (error) {
    res.status(200).send({
      isError: true,
      res: error
    });
  }
}

export default RegisterUser;