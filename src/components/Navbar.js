import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark text-white">
      <a class="navbar-brand">Employee Directory</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search for employee"
          aria-label="Search"
        />
      </form>
    </nav>
  );
}

export default Navbar;
