import React from "react";
import './styles.css';

interface TodoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.SyntheticEvent) => void;
}

const InputField: React.FC<TodoProps> = ({todo, setTodo, handleAdd} : TodoProps) => {
    return (
        <form className="input"
            onSubmit={handleAdd}> 
            <input type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Your Task Here"
                className="input-box"  />
            <button className="input-submit" type="submit">Add</button>
        </form>
    );
}

export default InputField;