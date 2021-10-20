import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GroceryList() {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>This is my Groceries</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Ingredient 1</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GroceryList;