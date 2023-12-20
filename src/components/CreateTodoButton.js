import React from 'react';
import addIcon from '../assets/add.png';
import { TodoContext } from '../contexts/TodoContext';
import '../css/CreateTodoButton.css'

function CreateTodoButton() {

    const { setOpenModal } = React.useContext(TodoContext);

    return (
        <button className="createTodoButton"
            onClick={() => {
                setOpenModal(prevState => !prevState);
            }}>
            <img src={addIcon} alt="Add icon" />
        </button>
    );
}

export { CreateTodoButton };