import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;