const User = require("./User");
const Recipes = require("./Recipe");
const Tags = require('./Tags');
const Favorite = require("./Favorite");

User.hasMany(Recipes);
Recipes.belongsTo(User);
Recipes.hasMany(Tags);
Tags.belongsTo(Recipes);

User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = { User, Recipes, Tags, Favorite };
