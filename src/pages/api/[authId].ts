import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { authId } = req.query;
  }
  res.status(200).json({ message: 'This works' });
};

export default handler;