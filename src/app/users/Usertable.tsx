import React from 'react';


interface UsersPageProps {
  id: number;
  name: string;
  email: string;
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UsersPageProps[] = await response.json();
  return users;
}
const Usertable = async() => {
  const data = await getUsers();
  return (
    <table className=" table table-boarded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Usertable;
