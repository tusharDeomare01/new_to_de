import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

//This Component represent the HomePage of WebApllication
export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  //axios : It's used to Connect to the BackEnd Server.
  //async : Async methods are often used to make network requests, such as fetching data from an API.
  //await : await is usually used to unwrap promises by passing a Promise as the expression.
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/taskdetails");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/task/${id}`);
    loadUsers();
  };

  return (          //The return Statement represent the table of the Task which Contain info of Task such as ID, Title, EndDate, Status etc.
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Title</th>
              <th scope="col">EndDate</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.title}</td>
                <td>{user.endDate}</td>
                <td>{user.status}</td>
                <td>
              /*Below are 3 links tags which are used to view Task info, Edit task info and Delete a tasl*/
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewtask/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edittask/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
