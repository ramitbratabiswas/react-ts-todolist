import React, { useRef } from "react";
import './styles.css';

interface TodoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.SyntheticEvent) => void;
}

const InputField: React.FC<TodoProps> = ({todo, setTodo, handleAdd} : TodoProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input"
            onSubmit={(event) => {
                    handleAdd(event);
                    inputRef.current?.blur();
                }
            }> 
            <input type="text"
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Your Task Here"
                className="input-box"  />
            <button className="input-submit" type="submit">Add</button>
        </form>
    );
}

export default InputField;