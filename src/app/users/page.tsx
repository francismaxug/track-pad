import React from "react";
import Usertable from "./Usertable";


const UsersPage = () => {
  
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Usertable />
    </>
  );
};

export default UsersPage;
