import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
interface UsersPageProps {
  id: number;
  name: string;
  email: string;
}

async function getUsers() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UsersPageProps[] = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
}
const Usertable = async ({ sorts }: { sorts: string }) => {
  console.log(sorts);
  const data = await getUsers();
  // const usersort = data.slice().sort((a, b) => {
  //   if (sorts === "name") {
  //     return a.name.localeCompare(b.name);
  //   } else {
  //     return a.email.localeCompare(b.email);
  //   }
  // });

  //same results as the one above
  const userSort1 = sort(data).asc(
    sorts === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <table className=" table table-boarded">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            {" "}
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {userSort1.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Usertable;
