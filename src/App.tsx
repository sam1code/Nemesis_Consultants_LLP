import React, { useState, useEffect } from "react";
import User from "./components/User";
import "./global.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(users);
  return (
    <div className="App">
      <h2>Data CRUD</h2>
      <div className="heading">
        <h3 className="heading_data">Name</h3>
        <h3 className="heading_data">User_Name</h3>
        <h3 className="heading_data">Email</h3>
        <h3 className="heading_data">Phone</h3>
        <h3 className="heading_data">Website</h3>
        <div className="heading_data"></div>
      </div>
      {users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          userName={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default App;
