import React from "react";

const User = ({ id, name, username, email, phone, website, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <div className="user_data">
        <div className="data">{name}</div>
        <div className="data">{username}</div>
        <div className="data">{email}</div>
        <div className="data">{phone}</div>
        <div className="data">{website}</div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default User;
