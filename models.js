const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const Plot = db.define('plots', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetables', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE,
});

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = db;
