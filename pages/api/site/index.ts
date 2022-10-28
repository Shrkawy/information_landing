import { NextApiRequest, NextApiResponse } from "next";

import SiteServices from "prisma/site";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      try {
        const sites = await SiteServices.getMany();

        res.status(200).json({ sites, success: true });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const site = await SiteServices.create(req.body);
        res.status(201).json({ success: true, data: site });
      } catch (error: any) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
