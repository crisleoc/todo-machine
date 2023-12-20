import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import errorImg from "../assets/error.svg"
import "../css/TodosMsg.css";

function TodosError() {
    const { error } = React.useContext(TodoContext);

    return (
        <div className="msg-container">
            <div className="img-container">
                <img src={errorImg} alt="Error" />
            </div>
            <span className="text-msg">
                {error.toString()}
            </span>
        </div>
    );
}

export { TodosError };