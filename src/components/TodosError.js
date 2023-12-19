import React from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodosError() {
    const { error } = React.useContext(TodoContext);

    return (
        <p>{error.toString()}</p>
    );
}

export { TodosError };