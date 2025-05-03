import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config'; // Ensure this is initialized correctly

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Real-time listener to the 'tasks' collection
    const unsubscribe = firestore.collection('tasks').onSnapshot(snapshot => {
      const taskData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(taskData);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []); // ✅ Empty array means run once on mount

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
