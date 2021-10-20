import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API";

function NewRecipe() {

    function onClick(event) {
        event.preventDefault();
        let recipeName = document.getElementById("formRecipe").value;
        console.log(`this is the recipe name ${recipeName.value}`);
        let recipeURL = document.getElementById("formRecipeURL").value;
        console.log(`this is the recipeURL ${recipeURL.value}`);

        API.addNewRecipe({
            recipe_name: recipeName,
            recipe_url: recipeURL
        })
            .catch(err => console.log(err));

    }

    return (
        <div>
            <Row>
                <Col></Col>
                <Col>
                    <Form autocomplete="off">
                        <Form.Group controlId="formRecipe">
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

                        <Form.Group controlId="formRecipeURL">
                            <Form.Label>Recipe URL</Form.Label>
                            <Form.Control type="text" placeholder="Recipe URL" />
                        </Form.Group>

                        <Button onClick={onClick} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default NewRecipe;