const recipeController = require('../../controllers/recipeController');
const router = require('express').Router();

router.route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.addNewRecipe)

module.exports = router;
