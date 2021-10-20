import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import API from "../utils/API"
import ListedResults from "./listedResults";

function SearchRecipe() {

    const [show, setShow] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        loadAllRecipes();
    }, [])

    function loadAllRecipes() {
        API.getRecipes()
            .then(res => setSearchResults(res.data))
            .catch(err => console.log(err));
    }

    function onChange(event) {
        event.preventDefault();
        let recipeName = document.getElementById("formRecipe").value;

        console.log(`this is recipeName ${recipeName}`)

        API.findRecipe({
            recipe_name: recipeName,
        })
            .then(res => setSearchResults(res.data))
            .catch(err => console.log(err));

    }

    function onSubmit(event) {
        event.preventDefault();
        let recipeName = document.getElementById("formRecipe").value;
        console.log(`this is the new recipe name ${recipeName}`);
        handleShow();
    }

    function onClick(event) {
        event.preventDefault();
        let newRecipeName = document.getElementById("newFormRecipe").value;
        let newRecipeURL = document.getElementById("newFormRecipeURL").value;

        API.addNewRecipe({
            recipe_name: newRecipeName,
            recipe_url: newRecipeURL
        })
            .then(handleClose())
            .then(loadAllRecipes())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Row>
                <Col>
                    <h2>Search for Recipe</h2>
                    <Form autocomplete="off">
                        <Form.Group onChange={onChange} controlId="formRecipe">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type="text" placeholder="Recipe Name" />
                            <Form.Text className="text-muted">
                                Search by name.
                            </Form.Text>
                        </Form.Group>

                        {/* <Form.Group controlId="formRecipeTag">
                            <Form.Label>Recipe Tags</Form.Label>
                            <Form.Control as="textarea" placeholder="Recipe Tags" />
                            <Form.Text className="text-muted">
                                Search by tag.
                            </Form.Text>
                        </Form.Group> */}

                        {/* <Button onClick={onSubmit} variant="primary" type="submit">
                            Submit
                        </Button> */}

                        <Button onClick={onSubmit} variant="primary" type="submit">
                            Add Recipe
                        </Button>
                    </Form>
                </Col>
            </Row>
            <br />
            <ListedResults show={show} data={searchResults} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="newFormRecipe">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type="text" placeholder="Recipe Name" />
                            <Form.Text className="text-muted">
                                You can name the recipe whatever you would like.
                            </Form.Text>
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
                            <Form.Control type="text" placeholder="Recipe URL" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={onClick} variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SearchRecipe;