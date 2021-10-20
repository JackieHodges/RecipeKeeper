import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router";
import API from "../utils/API";
import { useHistory } from 'react-router-dom';

function SpecificRecipe() {

    const [currentRecipe, setCurrentRecipe] = useState([]);
    const [favoriteRecipe, setFavoriteRecipe] = useState("secondary");
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        console.log(`this is the recipeID ${id}`)
        API.getSpecificRecipe(id)
            .then(res => setCurrentRecipe(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(currentRecipe)

    function onClick(event) {
        event.preventDefault();
        if (favoriteRecipe === "secondary") {
            setFavoriteRecipe("success")
            event.target.innerHTML = "Favorited";
        } else {
            setFavoriteRecipe("secondary")
            event.target.innerHTML = "Favorite";
        }
    }

    function updateRecipe(event) {
        event.preventDefault();
        let recipeName = document.getElementById("newFormRecipe").value;
        let recipeURL = document.getElementById("newFormRecipeURL").value;
        let ingredientList = document.getElementById("ingredientsList").value;
        let servingNumber = document.getElementById("numberOfServings").value;

        console.log(ingredientList)
        API.updateRecipe({
            recipe_id: currentRecipe.id,
            recipe_name: recipeName,
            recipe_url: recipeURL,
            servings: servingNumber,
            ingredients: ingredientList
        })
            .then(res => console.log(res.data))
            .then(handleClose)
            .then(window.location.reload(true))
            .catch(err => console.log(err));
    }

    function deleteRecipe(event) {
        event.preventDefault();

        API.deleteRecipe(currentRecipe.id)
            .then(history.push('/myRecipes'))
            .catch(err => console.log(err));
    }

    function IngredientsList() {
        if (currentRecipe.ingredients) {
            return (
                <>
                    <h3>Ingredients</h3>
                    {currentRecipe.ingredients.map(ingredient =>
                        <Row style={{ justifyContent: "center" }} key={ingredient.id}>
                            <h4>{ingredient}</h4>
                        </Row>
                    )}
                </>
            )
        } else {
            return <h4>No Ingredients Listed</h4>
        }
    }

    function ServingNumber() {
        if (currentRecipe.servings) {
            return <h4 key={currentRecipe.id}>{currentRecipe.servings}</h4>
        } else {
            return <h4>No Servings Listed</h4>
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
                        <Button onClick={handleShow}>Edit</Button>
                    </Col>
                    <Col>
                        <Button variant={favoriteRecipe} onClick={onClick}>Favorite</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" onClick={deleteRecipe}>Delete</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3><a rel="noreferrer" target="_blank" href={currentRecipe.recipe_url}>Website of Recipe</a></h3>
                    </Col>
                    <Col>
                        <h3>Servings</h3>
                        <ServingNumber />
                    </Col>
                    <Col>
                        <IngredientsList />
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit this Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form autocomplete="off">
                            <Form.Group controlId="newFormRecipe">
                                <Form.Label>Recipe Name</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecipe.recipe_name} />
                            </Form.Group>

                            {/* <Form.Group controlId="formRecipeTag">
                            <Form.Label>Recipe Tags</Form.Label>
                            <Form.Control as="textarea" placeholder="Recipe Tags" />
                            <Form.Text className="text-muted">
                                Add tags to help categorize this recipe. Each tag should be seperated by a comma.
                            </Form.Text>
                        </Form.Group> */}

                            <Form.Group controlId="newFormRecipeURL">
                                <Form.Label>Recipe URL</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecipe.recipe_url} />
                            </Form.Group>

                            <Form.Group controlId="numberOfServings">
                                <Form.Label>Servings</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecipe.servings} />
                            </Form.Group>

                            <Form.Group controlId="ingredientsList">
                                <Form.Label>Ingredients</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecipe.ingredients} />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={updateRecipe} variant="primary" type="submit">
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default SpecificRecipe;