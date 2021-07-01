import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function SearchRecipe() {

    return (
        <div>
            <Row>
                <Col></Col>
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

                        <Form.Group controlId="formRecipeTag">
                            <Form.Label>Recipe Tags</Form.Label>
                            <Form.Control as="textarea" placeholder="Recipe Tags" />
                            <Form.Text className="text-muted">
                                Search by tag.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default SearchRecipe;