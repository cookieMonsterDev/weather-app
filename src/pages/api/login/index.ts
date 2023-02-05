import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import userModel from "@/Schema/userSchema";
import connectMongo from "utils/connectMongo";


const loginAsUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await connectMongo();

    const data = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!data) {
      throw "Wrong email or password";
    }

    res.status(200).json({
      isError: false,
      res: data,
    });
  } catch (error) {
    res.status(200).send({
      isError: true,
      res: error,
    });
  }
};

export default loginAsUser;
