import React from 'react';
import { Table } from 'reactstrap';

const Staff = (props) => {

  const staff = props.staff.staff.map(ele => {
    return (
      <tbody>
        <tr>
          <th scope="row">{ele.staff_id}</th>
          <th>{ele.firstname}</th>
          <th>{ele.lasrname}</th>
          <th>{ele.username}</th>
        </tr>
      </tbody>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {staff}
    </Table>
  );
}

export default Staff;