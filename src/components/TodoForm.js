import React from "react";
import "../css/TodoForm.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const placeholder = "Make a coffee ☕";

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue) {
            addTodo(newTodoValue)
        } else {
            addTodo(placeholder)
        }
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form className="TodoForm"
            onSubmit={onSubmit}
        >
            <label>Escribe tu nueva tarea</label>
            <textarea
                className="TodoForm-textarea"
                placeholder={placeholder}
                value={newTodoValue}
                onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit">Agregar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}>Cancelar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };