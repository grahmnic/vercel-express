import express from 'express';
import bodyParser from 'body-parser';
// import cors from "cors"; // for CORS setup, usage: app.use(cors());

const app = express();
const port = process.env.PORT || 3030; // default port to listen
const db = require('../models');

app.get('/api/contacts', (req, res) => {
  return db.Contact.findAll()
    .then((contacts: any) => res.send(contacts))
    .catch((err: any) => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      return res.send(err)
    });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
