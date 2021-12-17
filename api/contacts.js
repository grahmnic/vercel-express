const db = require('../bootstrap/models');

export default (req, res) => {
  db.Contact.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      res.send(err)
    });
};