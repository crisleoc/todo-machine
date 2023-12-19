import doneIcon from "../assets/done.png";
import deleteIcon from "../assets/delete.png";
import "../css/TodoItem.css"

function TodoItem(props) {

	let todoItemClass = "todoItem";
	if (props.completed) {
		todoItemClass += " todoItem--done";
	}

	return (
		<li className={todoItemClass}>
			<button
				className="todoItem__btn-done"
				onClick={props.onComplete}
			>
				<img src={doneIcon} alt="Done task" />
			</button>
			<p className="todoItem__text">{props.text}</p>
			<button
				className="todoItem__btn-delete"
				onClick={props.onDelete}
			>
				<img src={deleteIcon} alt="Delete task" />
			</button>
		</li>
	);
}

export { TodoItem };