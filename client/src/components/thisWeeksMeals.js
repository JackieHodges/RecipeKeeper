import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function ThisWeek() {

    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div>
                {weekDay.map((value, index) => {
                    return (
                        <div>
                        <Row >

                            <Col key={index} className="justify-content-md-center">
                                {value}
                                <Card>
                                    <Card.Body>This is the recipe name</Card.Body>
                                    <Button variant="outline-danger">X</Button>
                                </Card>
                            </Col>

                        </Row>
                        <br />
                        </div>
                    )
                })}

        </div>
    )
}

export default ThisWeek;