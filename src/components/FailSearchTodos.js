import React from "react";
import emptyImg from "../assets/fail-search.png"
import "../css/TodosMsg.css";

function FailSearchTodos() {
    return (
        <div className="msg-container">
            <div className="img-container">
                <img src={emptyImg} alt="Empty tasklist" />
            </div>
            <span className="text-msg">
                Tarea no encontrada
            </span>
        </div>
    );
}

export { FailSearchTodos };