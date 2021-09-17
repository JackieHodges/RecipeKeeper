/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets the trip with the given id
  getRecipes: function() {
    return axios.get("/api/recipes/");
  },
  addNewRecipe: function (recipeData) {
    return axios.post("/api/recipes/", recipeData)
  },
  findRecipe: function (recipeData) {
    return axios.post("/api/recipes/find/", recipeData)
  },
  getSpecificRecipe: function (recipeData) {
    return axios.get("/api/recipes/" + recipeData)
  }
};
