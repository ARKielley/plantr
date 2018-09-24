const {db, Gardener, Plot, Vegetable} = require('./models');
const PlotVegetable = db.model('vegetable_plot');

db.sync({ force: true })
  .then(x => {
    console.log('db connection is lit');
    Vegetable.create({
      name: 'carrots',
      color: 'purple',
      planted_on: new Date()
    })
    .then(veg => {
      return Gardener.create({
        name: 'Murgatroyd',
        age: 2,
        favorite_vegetable: veg.id
      });
    })
    .then(gard => {
      return Plot.create({
        size: 10,
        shaded: false,
        gardenerId: gard.id
      });
    })
    .then(plot => {
      return PlotVegetable
    })
  // })
  // .then(veg => {
  //   return veg.addPlot();
  // })
  // .then(x => {
  //   db.close();
  })
  .catch(err => {
    console.log(err);
    db.close();
  });
