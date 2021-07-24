const db = require("../models");

// Defining methods for the tripsController
module.exports = {
  getAllRecipes: function (req, res) {
    db.Recipes
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
