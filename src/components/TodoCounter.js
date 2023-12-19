import React from 'react';
import '../css/TodoCounter.css'
import { TodoContext } from '../contexts/TodoContext';

function CongratulationMsg() {
    return (
        <h1 className="TodoCounter">
            Has completado todas tus tareas, felicidades! 🥳🎉
        </h1>
    );
}

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return (
        <>
            {totalTodos === completedTodos ? <CongratulationMsg /> :
                <h1 className="TodoCounter">
                    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
                </h1>
            }
        </>
    );
}

export { TodoCounter };