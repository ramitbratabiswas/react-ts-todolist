import React from "react";
import './styles.css';
import { Todo } from "../todo";
import { TodoCard } from "./TodoCard";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos } : TodoListProps) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <TodoCard
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos} />
            ))}
        </div>
    );
}