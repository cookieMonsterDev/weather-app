import { loginAsUserService } from "@/services/LoginAsUserService";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import userModel from "@/Schema/userSchema";
import connectMongo from "utils/connectMongo";


const Test = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await connectMongo();

    res.status(200).json({'test': 'test'});
  } catch (error) {
    res.status(200).send({'test': 'test'});
  }
};

export default Test;