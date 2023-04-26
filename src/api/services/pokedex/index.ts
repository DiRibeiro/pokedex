import type { ResponseFuncs } from "../../../lib/common/services/types";

import {
  get,
} from "./controller";

const handler = async (req: any, res: any) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const handleCase: ResponseFuncs = {
    GET: get
  }

  const controller = handleCase[method];

  if (controller) {
    return controller(req, res);
  }

  return res.status(400).json({ error: "No Response for this Request" });
}

export default handler;
