import React from "react";

function TodosError({ error }) {
    return (
        <p>{error.toString()}</p>
    );
}

export { TodosError };