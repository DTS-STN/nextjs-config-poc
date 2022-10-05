import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig()

const clientConfig = (req: NextApiRequest, res: NextApiResponse<{ name: string }>) => {
  res.status(200).json(serverRuntimeConfig)
}

export default clientConfig