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

function ErrorMsg() {
    return (
        <h1 className="TodoCounter">
            Ha ocurrido un error 😵
        </h1>
    );
}

function EmptyMsg() {
    return (
        <h1 className="TodoCounter">
            No tienes tareas por hacer 😁
        </h1>
    );
}

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
        error
    } = React.useContext(TodoContext);

    return (
        <>
            {error ? <ErrorMsg /> : null}
            {totalTodos === 0 && !error ? <EmptyMsg /> : null}
            {totalTodos !== 0 && totalTodos === completedTodos ? <CongratulationMsg /> : null}
            {
                totalTodos > 0 && totalTodos !== completedTodos && !error ?
                    <h1 className="TodoCounter">
                        Has completado {completedTodos} de {totalTodos} tareas
                    </h1>
                    : null
            }
        </>
    );
}

export { TodoCounter };