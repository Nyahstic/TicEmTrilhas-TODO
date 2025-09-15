import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const API_URL = 'http://localhost:3001/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleAddTodo = (text) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
      .then(response => response.json())
      .then(addedTodo => {
        setTodos([...todos, addedTodo]);
      });
  };

  const handleToggleComplete = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'PUT' })
      .then(response => response.json())
      .then(updatedTodo => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
      });
  };

  const handleDeleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };

  return (
    <div className="app-container">
      <Header />
      <main className="todo-card">
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList 
          todos={todos} 
          onToggleComplete={handleToggleComplete} 
          onDelete={handleDeleteTodo} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
