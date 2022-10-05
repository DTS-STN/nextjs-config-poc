import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from "next/config";

type Data = {
  name: string
}

const { serverRuntimeConfig } = getConfig();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(serverRuntimeConfig)
}
