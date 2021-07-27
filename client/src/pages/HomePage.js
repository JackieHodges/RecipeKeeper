import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap"
import API from "../utils/API";
import GroceryList from "../components/groceryList";
import ThisWeek from "../components/thisWeeksMeals";

function HomePage() {

    useEffect(() => {
        loadAllRecipes();
    })

    function loadAllRecipes(){
        API.getRecipes()
        .then(res => console.log(res.data))
    }

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
                {/* <Col>
                    <SearchRecipe />
                </Col> */}
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