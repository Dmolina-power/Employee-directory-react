import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark text-white">
      <div className="navbar-brand">Employee Directory</div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-4"
          type="search"
          placeholder="Search by Employee"
          aria-label="Search"
          name="search"
          onChange={props.handleInputChange}
          value={props.search}
        />
      </form>
    </nav>
  );
}

export default Navbar;
