const router = require("express").Router();
const recipeRoutes = require("./recipes");

// trip routes
router.use("/recipes", recipeRoutes);

module.exports = router;
