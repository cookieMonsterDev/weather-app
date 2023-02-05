import { loginAsUserService } from "@/services/LoginAsUserService";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const Test = async (req: NextApiRequest, res: NextApiResponse) => {

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  
  res.status(200).json({suc: 'test'});
};

export default Test;