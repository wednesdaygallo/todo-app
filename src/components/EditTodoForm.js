import React, { useState, useEffect } from 'react';

import './EditTodoForm.css';

export default function EditTodoForm(props) {
    const [todo, setTodo] = useState(props.currentTodo);

    useEffect(() => {
        setTodo(props.currentTodo)
    }, [props])


    const handleInputChange = (e) => {
        const newTodo = e.target.value;

        setTodo({ ...todo, text: newTodo });

    }
    
    const handleClick = (e) => {
      e.preventDefault();
      if (!todo) {
        return;
      };
  
      props.updateTodo(todo);

    };

    const cancelEditing = () => {
        props.setEditing(false);
    }
  
  
    return (
        <form className="input-container">
          <input type="text" placeholder="Edit Todo" value={todo.text} onChange={handleInputChange}></input>
          <button className="update-todo-btn" onClick={handleClick}>Update</button>
          <button className="cancel-btn" onClick={cancelEditing}>Cancel</button>
        </form>
    );
}