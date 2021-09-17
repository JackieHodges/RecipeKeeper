import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API"
import ListedResults from "./listedResults";

function SearchRecipe() {

    const [show, setShow] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onClick(event){
        event.preventDefault();
        let recipeName = document.getElementById("formRecipe").value;
        console.log(`this is recipeName ${recipeName}`)

        API.findRecipe({
            recipe_name: recipeName,
        })
        .then(res => setSearchResults(res.data))
        .then(handleShow())
        .catch(err => console.log(err));

    }

    return (
        <div>
            <Row>
                <Col>
                    <h2>Search for Recipe</h2>
                    <Form>
                        <Form.Group controlId="formRecipe">
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

                        <Button onClick={onClick} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <br />
            <ListedResults show={show} data={searchResults} />
        </div>
    )
}

export default SearchRecipe;