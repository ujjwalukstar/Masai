import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'tasks'), snapshot => {
      const taskData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(taskData);
    });

    return () => unsub();
  }, []);

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  const updateTask = async (id, newName) => {
    const newTitle = prompt('Edit Task:', newName);
    if (newTitle) {
      await updateDoc(doc(db, 'tasks', id), { name: newTitle });
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} [{task.status}]
            <button onClick={() => updateTask(task.id, task.name)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
