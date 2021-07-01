const sequelize = require('../config/connection');
const { User, Recipes, WeeklyMeals, Tags } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const weeklyData = require('./weeklyMealsData.json');
const tagData = require('./tagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Recipes.bulkCreate(recipeData);

  await WeeklyMeals.bulkCreate(weeklyData);

  await Tags.bulkCreate(tagData);
  
  process.exit(0);
};

seedDatabase();

