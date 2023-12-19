import addIcon from '../assets/add.png';
import '../css/CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="createTodoButton"
            onClick={(event) => {
                console.log("Click!")
                console.log(event)
                console.log(event.target)
            }}>
            <img src={addIcon} alt="Add icon" />
        </button>
    );
}

export { CreateTodoButton };