import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(todo.id)} className="todo-text">
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
