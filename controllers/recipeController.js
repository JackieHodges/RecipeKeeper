const db = require("../models");
const { Op } = require("sequelize");

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
  },
  updateRecipe: function (req, res) {
    let ingredientsArray = req.body.ingredients.split(",")
    db.Recipes
      .update({
        recipe_name: req.body.recipe_name,
        recipe_url: req.body.recipe_url,
        servings: req.body.servings,
        ingredients: ingredientsArray
      }, {
        where: {
          id: req.body.recipe_id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteRecipe: function (req, res) {
    db.Recipes
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRecipe: function (req, res) {
    db.Recipes
      .findAll({
        where: {
          recipe_name: {
            [Op.substring]: `${req.body.recipe_name}`
          }
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSpecificRecipe: function (req, res) {
    db.Recipes
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
