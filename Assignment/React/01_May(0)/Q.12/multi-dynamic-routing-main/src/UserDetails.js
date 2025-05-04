import { useParams } from "react-router-dom";
import { users } from "./Users";

function UserDetails() {
  const { id } = useParams();
  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <p>No user exists with ID: {id}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;