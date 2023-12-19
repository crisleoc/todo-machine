import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { LoadingCounter } from '../components/LoadingCounter';
import { TodoContext } from '../contexts/TodoContext';

function AppUI() {
    return (
        <TodoContext.Consumer>
            {(
                {
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }
            ) => (
                <>
                    <header>
                        {loading ? <LoadingCounter /> : <TodoCounter />}
                        <TodoSearch />
                    </header>

                    <main>
                        <TodoList>
                            {loading ? <TodosLoading /> : null}
                            {error ? <TodosError /> : null}
                            {(!loading && !searchedTodos.length) ? <EmptyTodos /> : null}
                            {!loading && !error ? searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            )) : null}
                        </TodoList>
                    </main>
                    <CreateTodoButton />
                </>
            )}
        </TodoContext.Consumer>
    )
}

export { AppUI };