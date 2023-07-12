import React from "react";
import './styles.css';

const InputField: React.FC = () => {
    return (
        <form className="input"> 
            <input type="text" 
                placeholder="Your Task Here"
                className="input-box"  />
            <button className="input-submit" type="submit">Add</button>
        </form>
    );
}

export default InputField;