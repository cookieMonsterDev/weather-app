import { updateBookmarksService } from "@/services/UpdateBookmarksService";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const UpdateBookmarks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200,
    });

    const user = await updateBookmarksService(req.body);

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

export default UpdateBookmarks;