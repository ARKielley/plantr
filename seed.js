const db = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('db connection is lit');
    db.close();
  })
  .catch(err => {
    console.log(err);
    db.close();
  });
