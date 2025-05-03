import React from 'react';
import Navbar from './Navbar';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import "./App.css"
function App() {
  return (
    <div>
      <Navbar />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
