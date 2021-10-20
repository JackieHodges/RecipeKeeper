const sequelize = require('../config/connection');
const { User, Recipes, Tags, Favorite } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const tagData = require('./tagData.json');
const favoriteData = require('./favoriteData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Recipes.bulkCreate(recipeData);

  await Favorite.bulkCreate(favoriteData);

  await Tags.bulkCreate(tagData);
  
  process.exit(0);
};

seedDatabase();

