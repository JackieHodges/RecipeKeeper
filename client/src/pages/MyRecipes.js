import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewRecipe from "../components/newRecipe";
import RecipeCard from "../components/recipeCard";
import API from "../utils/API";

function MyRecipes() {

    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
        loadAllRecipes();
    }, [myRecipes])

    function loadAllRecipes() {
        API.getRecipes()
            .then(res => setMyRecipes(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>My Recipes</Col>
                </Row>
                <Row>
                    <Col>
                        <NewRecipe />
                    </Col>
                </Row>
                {myRecipes.map(recipe =>
                    <Row key={recipe.id} >
                        <RecipeCard recipe={recipe} />
                    </Row>
                )}
            </Container>
        </div>
    )
}

export default MyRecipes;