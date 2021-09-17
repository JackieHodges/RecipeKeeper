import React, { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";

function ListedResults(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (props.data.length === 0) {
        return (
            <h3 show={props.show}>No results found</h3>
        )
    } else {
        return (
            <div>
                <ListGroup>
                    {props.data.map(data => (
                        <div>
                            <ListGroup.Item key={data.id} onClick={handleShow}>
                                {data.recipe_name}
                            </ListGroup.Item>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{data.recipe_name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><a href={data.recipe_url} target="_blank">Recipe can be found here</a></Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    ))}
                </ListGroup>
            </div>
        )
    }
}

export default ListedResults;