import React from "react";
import UserModal from "../components/UserModal";

function Topic() {
  const users = [
    { no: 1, name: "John Doe", email: "john@test.com", regDate: "01/01/1900" },
    { no: 2, name: "Jane Doe", email: "jane@test.com", regDate: "02/02/1900" },
    {
      no: 3,
      name: "Cisco Ramon",
      email: "ramon@test.com",
      regDate: "03/03/1900",
    },
  ];
  return (
    <div>
      <div className='row pt-3'>
        <div className='col-md-9 col-sm-9'>
          <h4>All Users</h4>
        </div>
        <div className='col-md-3 col-sm-3'>
          <UserModal />
        </div>
      </div>
      <div className='pt-3'>
        <table className='table'>
          <thead>
            <tr className='text-muted'>
              <th>#</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Registration date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user.no}>
              <tr>
                <th>{user.no}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.regDate}</td>
                <td>
                  <button className='btn btn-sm btn-outline-success btn-appearance'>
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Topic;
