import { Link } from "react-router-dom";

// Shared users data
export const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;