import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './styles.css';

interface TodoCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoCard = ({ todo, todos, setTodos }: TodoCardProps) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map(
                (todo) => todo.id === id ? 
                    {
                        ...todo,
                        isDone: !todo.isDone 
                    } : todo
        ));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className="todos-single" onSubmit={(event) => handleEdit(event, todo.id)}>
            { edit ? <input 
                        ref={inputRef}
                        className="todos-single-input" 
                        value={editTodo}
                        onChange={(event) => setEditTodo(event.target.value)} /> : todo.isDone ? (
                    <s className="todos-single-text">{todo.todo}</s>
                ) : (
                    <span className="todos-single-text">{todo.todo}</span>
                )
            }
            
            <div>
                <span className="icon" 
                    onClick={() => {
                        if (!(edit || todo.isDone)) {
                            setEdit(!edit);
                        }
                    }}>
                    <AiFillEdit /></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
        </form>
    );
}
