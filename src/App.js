import React from 'react';
import './App.css';


export default function App() {
  return (
    <div className='Container'>
      <h1>Todo List</h1>
      <hr />


      <div className='newtask'>
        <input type="text" placeholder="Add your task" />
          <button className='submit'>Submit</button>    
      </div>
<hr />

      <ul>
        <li className='lists'>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}