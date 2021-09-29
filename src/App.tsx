import React, { useState, useEffect } from "react";
import User from "./components/User";
import Heading from "./components/Heading";
import "./global.css";
import Adduser from "./components/Adduser";

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
  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(users);
  return (
    <div className="App">
      <h2>JSON PLACE HOLDER</h2>
      <br />
      <Adduser onAdd={onAdd} />
      <Heading />
      {users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
          key={user.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default App;
