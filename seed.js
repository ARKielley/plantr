const {db, Gardener, Plot, Vegetable} = require('./models');

db.sync({ force: true })
  .then(x => {
    console.log('db connection is lit');
    const carrot = Vegetable.create({
      name: 'carrots',
      color: 'purple',
      planted_on: new Date()
    });
    const carrotGardener = carrot.then(veg => {
      return Gardener.create({
        name: 'Murgatroyd',
        age: 2,
        favorite_vegetable: veg.id
      });
    });
    const carrotPlot = carrotGardener.then(gard => {
      return Plot.create({
        size: 10,
        shaded: false,
        gardenerId: gard.id
      });
    });
    carrotPlot.then(plot => {
      plot.addVegetable(carrot.id);
    })
  })
  // .then(x => {
  //   db.close();
  // })
  .catch(err => {
    console.log(err);
    db.close();
  });
