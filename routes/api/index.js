const router = require("express").Router();
const recipeRoutes = require("./recipes");
const thisWeekRoutes = require("./thisWeek");

// trip routes
router.use("/recipes", recipeRoutes);
router.use("/thisWeek", thisWeekRoutes);

module.exports = router;
