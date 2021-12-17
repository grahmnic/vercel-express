import type { VercelRequest, VercelResponse } from '@vercel/node';

const db = require('./models');

export default (req: VercelRequest, res: VercelResponse) => {
  db.Contact.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      res.send(err)
    });
};