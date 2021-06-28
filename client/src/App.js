import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NavBar from "./components/navBar";
import MyRecipes from "./components/myRecipes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/myRecipes" component={ MyRecipes } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
