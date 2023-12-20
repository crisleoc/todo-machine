import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { FailSearchTodos } from '../components/FailSearchTodos';
import { LoadingCounter } from '../components/LoadingCounter';
import { TodoContext } from '../contexts/TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <header>
                {loading ? <LoadingCounter /> : <TodoCounter />}
                <TodoSearch />
            </header>

            <main>
                <TodoList>
                    {loading ? <TodosLoading /> : null}
                    {error ? <TodosError /> : null}
                    {(!loading && !searchedTodos.length && !searchValue) ? <EmptyTodos /> : null}
                    {(!error && !!searchValue && !searchedTodos.length) ? <FailSearchTodos /> : null}
                    {(!loading && !error) ? searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.key}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.key)}
                            onDelete={() => deleteTodo(todo.key)}
                        />
                    )) : null}
                </TodoList>
            </main>

            <footer className={openModal ? "modal-open" : ""}>
                <CreateTodoButton />
            </footer>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    )
}

export { AppUI };