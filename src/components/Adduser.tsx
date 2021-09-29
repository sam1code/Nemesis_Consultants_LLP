import React from "react";

const Adduser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.website.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input placeholder="Name" name="name" />
        <input placeholder="UserName" name="username" />
        <input placeholder="Email" name="email" />
        <input placeholder="phone" name="phone" />
        <input placeholder="website" name="website" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};
export default Adduser;
