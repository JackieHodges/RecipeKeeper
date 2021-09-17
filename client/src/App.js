import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NavBar from "./components/navBar";
import MyRecipes from "./pages/MyRecipes";
import SearchRecipe from "./components/searchRecipes";
import ThisWeek from "./components/thisWeeksMeals";
import SpecificRecipe from "./pages/SpecificRecipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/myRecipes" component={ MyRecipes } />
          <Route exact path="/myRecipes/:id" component={ SpecificRecipe } />
          <Route exact path="/searchRecipes" component={ SearchRecipe } />
          <Route exact path="/thisWeeksMeals" component={ ThisWeek } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
