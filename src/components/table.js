import React from "react";

function Table(props) {
  return (
    <div className="jumbotron bg-transparent">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">
              Employee Name
              <button onClick={this.onSortUp}>
                <span class="glyphicon glyphicon-triangle-top"></span>
              </button>
              <button onClick={this.onSortDown}>
                <span class="glyphicon glyphicon-triangle-bottom"></span>
              </button>
            </th>
            <th scope="col">Cell Number</th>
            <th scope="col">Email</th>
            <th scope="col">D.O.B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.photo}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
