import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

const Navbar = () => {
  const [taskGroups, setTaskGroups] = useState({ completed: [], ongoing: [], notStarted: [] });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'tasks'), snapshot => {
      const all = { completed: [], ongoing: [], notStarted: [] };

      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.status === 'completed') all.completed.push(data.name);
        else if (data.status === 'ongoing') all.ongoing.push(data.name);
        else all.notStarted.push(data.name);
      });

      setTaskGroups(all);
    });

    return () => unsub();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#333', color: '#fff' }}>
      {['completed', 'ongoing', 'notStarted'].map(bucket => (
        <div key={bucket} style={{ position: 'relative' }}>
          <div>{bucket.charAt(0).toUpperCase() + bucket.slice(1)}: {taskGroups[bucket].length}</div>
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: 0,
            background: '#444',
            padding: '0.5rem',
            borderRadius: '4px',
            display: 'none'
          }} className="hover-list">
            <ul>
              {taskGroups[bucket].map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <style>{`
        div:hover .hover-list {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
