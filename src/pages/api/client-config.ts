import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

type ClientConfig = {
  [key: string]: string | undefined
}

const { serverRuntimeConfig } = getConfig()

const clientConfig = (req: NextApiRequest, res: NextApiResponse<ClientConfig>) => {
  res.status(200).json(serverRuntimeConfig)
}

export default clientConfig
export type { ClientConfig }
