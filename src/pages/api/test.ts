import type { NextApiRequest, NextApiResponse } from "next";
import { createUserService } from "@/services/CreateUserService";

const test = async (req: NextApiRequest, res: NextApiResponse) => {

    res.status(200).json({test: 'Success'});

}

export default test;