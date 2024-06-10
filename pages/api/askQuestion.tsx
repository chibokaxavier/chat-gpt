import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { chatsId, session, prompt, model } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please enter a prompt!" });
  }
  if (!chatsId) {
    res.status(400).json({ answer: "Please enter a valid chat ID!" });
  }
  const response = await query(chatsId, session, prompt, model);
  res.status(200).json({ answer: "Hello from Next.js!" });
}
