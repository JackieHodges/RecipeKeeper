import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import NewRecipe from "../components/newRecipe";
import RecipeCard from "../components/recipeCard";
import API from "../utils/API";

function SpecificRecipe() {

    const [currentRecipe, setCurrentRecipe] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        console.log(`this is the recipeID ${id}`)
        API.getSpecificRecipe(id)
            .then(res => setCurrentRecipe(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            this is a specific recipe
            {currentRecipe.recipe_name}
            {/* <Container>
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
            </Container> */}
        </div>
    )
}

export default SpecificRecipe;