import React from "react";
import Usertable from "./Usertable";


const UsersPage = ({searchParams}:{
  searchParams:{
    sortOrder:string
  }
}) => {

  const sort = searchParams.sortOrder;

  return (
    <>
      <h1>Users</h1>
      <Usertable sorts={sort} />
    </>
  );
};

export default UsersPage;
