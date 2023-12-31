import React from "react";
import emptyImg from "../assets/empty-list.png"
import "../css/TodosMsg.css";

function EmptyTodos() {
    return (
        <div className="msg-container">
            <div className="img-container">
                <img src={emptyImg} alt="Empty tasklist" />
            </div>
            <span className="text-msg">
                Tasklist vacía, agrega tareas
            </span>
        </div>
    );
}

export { EmptyTodos };