import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NavBar from "./components/navBar";
import MyRecipes from "./pages/MyRecipes";
import SearchRecipe from "./components/searchRecipes";
import ThisWeek from "./components/thisWeeksMeals";
import SpecificRecipe from "./pages/SpecificRecipe";
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <ProtectedRoute exact path="/myRecipes" component={ MyRecipes } />
          <ProtectedRoute exact path="/myRecipes/:id" component={ SpecificRecipe } />
          <Route exact path="/searchRecipes" component={ SearchRecipe } />
          <ProtectedRoute exact path="/thisWeeksMeals" component={ ThisWeek } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
