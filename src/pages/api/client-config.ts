import type { NextApiRequest, NextApiResponse } from 'next';

export type ClientConfig = {
  [key: string]: string | undefined;
};

const nextPublicConfigs = Object.keys(process.env)
  .filter((key) => key.startsWith('NEXT_PUBLIC'))
  .reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue]: process.env[currentValue] }), {});

const clientConfig = (req: NextApiRequest, res: NextApiResponse<ClientConfig>) => {
  res.status(200).json(nextPublicConfigs);
};

export default clientConfig;
