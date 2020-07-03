import React from "react";

function Table(props) {
  return (
    <tr>
      <td>
        <img src={props.photo} alt="employee" />
      </td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.location}</td>
    </tr>
  );
}

export default Table;
