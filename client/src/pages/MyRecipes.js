import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "../components/recipeCard";
import API from "../utils/API";

function MyRecipes() {

    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
        loadAllRecipes();
    }, [])

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