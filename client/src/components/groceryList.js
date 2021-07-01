import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GroceryList() {

    return (
        <div>
            <Container>
                <Row>
                    <Col>This is my Groceries</Col>
                </Row>
                <Row>
                    <Col>Ingredient 1</Col>
                </Row>
            </Container>
        </div>
    )
}

export default GroceryList;