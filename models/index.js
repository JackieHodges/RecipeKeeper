const User = require("./User");
const Recipes = require("./Recipe");
const WeeklyMeals = require('./WeeklyMeals');
const Tags = require('./Tags')

User.belongsToMany(Recipes, {
    through: {
        model: WeeklyMeals,
        unique: false
    }
});

Recipes.belongsToMany(User, {
    through: {
        model: WeeklyMeals,
        unique: false
    }
});

// User.hasMany(Recipes);
// Recipes.belongsToMany(User);
// User.hasOne(WeeklyMeals);
// WeeklyMeals.belongsTo(User);
Recipes.hasMany(Tags);
Tags.belongsTo(Recipes);

module.exports = { User, Recipes, Tags, WeeklyMeals };
