import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import EditTodoForm from './components/EditTodoForm';
import Todos from './components/Todos';


function App() {
  //Setting initial states
  const initialTodoState = [
    { text: 'Study React Hooks', key: 1 },
    { text: 'Pick up dry cleaning', key: 2 }
  ]

  const initialFormState = { text: '', key: null }

  //Define states
  const [todos, setTodos] = useState(initialTodoState);
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  //Define functions
  const handleSubmit = (todo) => {
    const newTodo = {
      text: todo,
      key: Date.now()
    };
    setTodos([...todos, newTodo]);
  }

  const handleDelete = (key) => {
    const filteredTodos = todos.filter(todo => todo.key !== key);
    setTodos(filteredTodos);
    setEditing(false);
  }

  const editTodo = (todo) => {
    const editingTodo = { text: todo.text, key: todo.key };

    setEditing(true);
    setCurrentTodo(editingTodo);
  }

  const updateTodo = (updatedTodo) => {
      const newTodos = todos.map((todo) => (updatedTodo.key === todo.key ? updatedTodo : todo));

    setEditing(false);

    setTodos(newTodos);
  }

  return (
    <div className="app-container">
      <header>
        <h1>My Todo List</h1>
        <div className="formContainer">
          {
            editing ? <EditTodoForm setEditing={setEditing} currentTodo={currentTodo} updateTodo={updateTodo} /> 
            : 
            <TodoForm handleSubmit={handleSubmit} />
          }
        </div>
      </header>
      <main>
        <Todos todos={todos} handleDelete={handleDelete} editTodo={editTodo} />
      </main>
    </div>
  );
}

export default App;
