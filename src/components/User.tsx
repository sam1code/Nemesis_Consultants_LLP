import React from "react";

const User = ({ id, name, userName, email, phone, website }) => {
  return (
    <div>
      <div className="user_data">
        <div className="data">{name}</div>
        <div className="data">{userName}</div>
        <div className="data">{email}</div>
        <div className="data">{phone}</div>
        <div className="data">{website}</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default User;
