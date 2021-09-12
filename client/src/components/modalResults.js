import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

function ModalResults(props) {

    console.log(props.data)

    if (props.data.length === 0) {
        return (
            <div>
                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>No Results Found</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This recipe doesn not currently exist in your recipe book. Please try again or add the recipe.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    } else {
        return (
            <div>
                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Result(s) Found</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup>
                        {props.data.map(data => (
                            <div>
                                <ListGroup.Item key={data.id} action href="/recipe/">
                                    {data.recipe_name}
                                </ListGroup.Item>
                            </div>
                        ))}
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalResults;