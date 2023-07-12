import React from "react";
import { Todo } from "../todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface TodoCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoCard = ({ todo, todos, setTodos }: TodoCardProps) => {
    return (
        <form className="todos-single">
            <span className="todos-single-text">{todo.todo}</span>
            <div>
                <span className="icon"><AiFillEdit /></span>
                <span className="icon"><AiFillDelete /></span>
                <span className="icon"><MdDone /></span>
            </div>
        </form>
    );
}
