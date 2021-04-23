import { NextApiRequest, NextApiResponse } from 'next';
import {fetchCharacters } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const after = req.query?.after as string | '';
  // TODO sækja næstu síðu af gögnum hér
  const characters = await fetchCharacters(after);
  res.status(200).json(characters);
};
