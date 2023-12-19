import "../css/TodoLoading.css"

function TodoLoading() {

    return (
        <li className="todoItem--skeleton">
            <div className="todoItem--skeleton__btn-container skeleton"></div>
            <span className="todoItem--skeleton__text-container skeleton"></span>
            <div className="todoItem--skeleton__btn-container skeleton"></div>
        </li>
    );
}

export { TodoLoading };