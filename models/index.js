const User = require("./User");
const Recipes = require("./Recipe");
const Tags = require('./Tags')

User.hasMany(Recipes);
Recipes.belongsTo(User);
Recipes.hasMany(Tags);
Tags.belongsTo(Recipes);

module.exports = { User, Recipes, Tags };
