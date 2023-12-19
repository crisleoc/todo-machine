import '../css/TodoCounter.css'

function CongratulationMsg() {
    return (
        <h1 className="TodoCounter">
            Has completado todas tus tareas, felicidades! 🥳🎉
        </h1>
    );
}

function TodoCounter({ total, completed }) {
    return (
        <>
            {total === completed ? <CongratulationMsg /> :
                <h1 className="TodoCounter">
                    Has completado <span>{completed}</span> de <span>{total}</span> TODOs
                </h1>
            }
        </>
    );
}

export { TodoCounter };