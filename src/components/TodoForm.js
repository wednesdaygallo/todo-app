import React, { useState } from 'react';

import './TodoForm.css';

export default function TodoForm(props) {
    const [todo, setTodo] = useState("");
  
    const handleClick = (e) => {
      e.preventDefault();
      if (!todo) {
        return;
      };
  
      props.handleSubmit(todo);
      setTodo("");
    };
  
  
    return (
        <form className="input-container">
          <input type="text" placeholder="New Todo" value={todo} onChange={e => setTodo(e.target.value)}></input>
          <button className="add-todo-btn" onClick={handleClick}>+</button>
        </form>
    );
}