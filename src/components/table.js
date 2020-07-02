import React from "react";

function Table() {
    return (
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>555-555-5555</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>444-444-4444</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry bird</td>
      <td>333-333-3333</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>dan mendoza</td>
      <td>222-222-2222</td>
      <td>@hotmail</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry king</td>
      <td>666-666-6666</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


    )
}

export default Table;