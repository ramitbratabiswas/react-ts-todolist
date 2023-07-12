import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { Todo } from './todo';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false 
      }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">
        {`myTodoList :)`}
      </span>
      <InputField 
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos} />
    </div>
  );
}

export default App;
