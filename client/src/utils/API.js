/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets the trip with the given id
  getRecipes: function() {
    return axios.get("/api/recipes/");
  }
};
