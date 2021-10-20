const recipeController = require('../../controllers/recipeController');
const router = require('express').Router();

router.route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.addNewRecipe)

router.route("/update")
  .post(recipeController.updateRecipe)

router.route("/find")
  .post(recipeController.findRecipe)

router.route("/:id")
  .get(recipeController.findSpecificRecipe)
  .delete(recipeController.deleteRecipe)

module.exports = router;
