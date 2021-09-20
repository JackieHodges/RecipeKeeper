import React from "react";
import { ListGroup } from "react-bootstrap";

function ListedResults(props) {

    if (props.data.length === 0) {
        return (
            <h3 show={props.show}>No results found</h3>
        )
    } else {
        return (
            <div>
                <ListGroup>
                    {props.data.map(data => (

                        <ListGroup.Item key={data.id} action href={'/myRecipes/' + data.id}>
                            {data.recipe_name}
                        </ListGroup.Item>

                    ))}
                </ListGroup>
            </div>
        )
    }
}

export default ListedResults;