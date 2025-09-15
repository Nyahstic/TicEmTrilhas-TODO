import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicionar uma nova tarefa..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">Adicionar</button>
    </form>
  );
}

export default TodoForm;
