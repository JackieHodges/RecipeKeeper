const db = require("../models");

// Defining methods for the tripsController
module.exports = {
  getAllRecipes: function (req, res) {
    db.Recipes
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addNewRecipe: function (req, res) {
    db.Recipes
      .create({
        recipe_name: req.body.recipe_name,
        recipe_url: req.body.recipe_url
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
