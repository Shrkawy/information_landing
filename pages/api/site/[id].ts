import { NextApiRequest, NextApiResponse } from "next";

import SiteServices from "prisma/site";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  const id = Number(query.id);

  if (isNaN(id)) {
    res.status(400).json({ success: false });
    return;
  }

  switch (method) {
    case "GET":
      try {
        const site = await SiteServices.getOne(id);
        res.status(200).json({ site, success: true });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const site = await SiteServices.update(id, req.body);
        res.status(201).json({ success: true, data: site });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const site = await SiteServices.deleteOne(id);
        res.status(201).json({ success: true, data: site });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
