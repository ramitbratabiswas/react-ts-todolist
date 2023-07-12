import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { Todo } from './todo';

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
        Taskify!
      </span>
      <InputField todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd} />
    </div>
  );
}

export default App;
