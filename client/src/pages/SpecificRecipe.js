import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import NewRecipe from "../components/newRecipe";
import RecipeCard from "../components/recipeCard";
import API from "../utils/API";

function SpecificRecipe() {

    const [currentRecipe, setCurrentRecipe] = useState([]);
    const [favoriteRecipe, setFavoriteRecipe] = useState("secondary");

    const { id } = useParams();

    useEffect(() => {
        console.log(`this is the recipeID ${id}`)
        API.getSpecificRecipe(id)
            .then(res => setCurrentRecipe(res.data))
            .catch(err => console.log(err));
    }, [])

    function onClick (event) {
        event.preventDefault();
        if (favoriteRecipe === "secondary"){
            setFavoriteRecipe("success")
            event.target.innerHTML = "Favorited";
        } else {
            setFavoriteRecipe("secondary")
            event.target.innerHTML = "Favorite Meal";
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>{currentRecipe.recipe_name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href={currentRecipe.recipe_url}>Website of Recipe</a>
                    </Col>
                    <Col>
                        Servings
                    </Col>
                    <Col>
                        <Button variant={favoriteRecipe} onClick={onClick}>Favorite Meal</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Ingredients
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SpecificRecipe;