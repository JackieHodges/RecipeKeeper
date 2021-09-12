import React from "react";
import { Row, Col } from "react-bootstrap"
import GroceryList from "../components/groceryList";
import ThisWeek from "../components/thisWeeksMeals";
import NewRecipe from "../components/newRecipe";
import SearchRecipe from "../components/searchRecipes";


function HomePage() {

    return (
        <div>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>Welcome to your Recipe Box</h1>
                    <h5>Here you can store recipes, search through your recipes, and create a meal plan/shopping list</h5>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <SearchRecipe />
                </Col>
                <Col>
                    <GroceryList />
                </Col>
                <Col>
                    <ThisWeek />
                </Col>
            </Row>
        </div>
    )

}

export default HomePage;