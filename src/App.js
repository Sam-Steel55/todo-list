import React, { useState } from 'react';
import './App.css';

// Main App component
export default function App() {
  // State for the new task input and list of todos
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      name: 'Walk the dog',
    },
    {
      name: 'Water the plants',
    },
    {
      name: 'Wash the dishes',
    },
  ]);

  // Function to add a new todo to the list
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { name: todo }]);
      setTodo("");
    }
  };

  // Function to delete a todo from the list
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.name !== text.name);
    setTodos(newTodos);
  };

  return (
    <div className='Container'>
      <h1>Todo List</h1>
      <hr />

      {/* New task input and add button */}
      <div className='newtask'>
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Add a new task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='submit' onClick={addTodo}>Add Task</button>
      </div>
      <hr />

      {/* Conditional rendering based on the number of todos */}
      {todos.length > 0 ? (
        <ul className='todo-list'>
          {/* Mapping through todos to display each task */}
          {todos.map((todo, index) => (
            <div className='todo' key={index}>
              <li>{todo.name}</li>
              {/* Delete button for each task */}
              <button
                className='delete-button'
                onClick={() => deleteTodo(todo)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        // Display message when there are no tasks
        <div className='empty'>
          <p>No New Tasks</p>
        </div>
      )}
    </div>
  );
}
