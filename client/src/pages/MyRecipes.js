import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchRecipe from "../components/searchRecipes";

function MyRecipes() {

    const { user, isAuthenticated } = useAuth0();

    return (
        // isAuthenticated && (
            <div>
                <Container>
                    <Row>
                        <Col>{user.given_name}'s Recipes</Col>
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
        // )
    )
}

export default MyRecipes;