
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: 'Aprender React', completed: true },
  { id: 2, text: 'Criar um app full-stack', completed: false },
  { id: 3, text: 'Beber café', completed: false },
];

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo (toggle complete)
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
