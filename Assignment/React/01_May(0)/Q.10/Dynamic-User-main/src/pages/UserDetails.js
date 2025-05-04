import React from 'react';
import { useParams } from 'react-router-dom';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

function UserDetails() {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>Details of {user.name}</h1>
      <p>User ID: {user.id}</p>
      <p>This is the profile page for {user.name}.</p>
    </div>
  );
}

export default UserDetails;