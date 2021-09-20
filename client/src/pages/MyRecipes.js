import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import NewRecipe from "../components/newRecipe";
import SearchRecipe from "../components/searchRecipes";

function MyRecipes() {

    return (
        <div>
            <Container>
                <Row>
                    <Col>My Recipes</Col>
                </Row>
                <Row>
                    {/* <Col>
                        <NewRecipe />
                    </Col> */}
                    <Col>
                        <SearchRecipe />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyRecipes;