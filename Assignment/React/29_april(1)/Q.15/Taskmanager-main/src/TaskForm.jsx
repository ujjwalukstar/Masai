import React, { useState } from 'react';
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('notStarted');

  const addTask = async () => {
    if (taskName.trim()) {
      await addDoc(collection(db, 'tasks'), { name: taskName, status });
      setTaskName('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Task name" />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="notStarted">Not Started</option>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
