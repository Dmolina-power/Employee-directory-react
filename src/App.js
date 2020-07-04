import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import API from "./utils/API";
import moment from "moment";
import "./App.css";

const sortType = {
  up: {
    class: "sortup",
    fn: (a, b) => a.name.localeCompare(b.name),
  },
  down: {
    class: "sortdown",
    fn: (a, b) => b.name.localeCompare(a.name),
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

class App extends React.Component {
  state = {
    results: [],
    search: "",
    currentSort: "up",
    sortIcon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sort-alpha-up-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"/>
    <path fillRule="evenodd" d="M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"/>
    <path d="M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z"/>
  </svg>
  };

  componentDidMount() {
    API.getUser()
      .then((res) =>
        res.data.results.map((result) => ({
          name: `${result.name.first} ${result.name.last}`,
          searchName: `${result.name.first}${result.name.last}`,
          id: result.registered.date,
          photo: result.picture.medium,
          email: result.email,
          phone: result.phone,
          location: result.location.city,
          dob: moment(result.dob.date).format("MM/DD/YYYY"),
        }))
      )
      .then((newData) => this.setState({ results: newData }))
      .catch((error) => console.log(error));
  }

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;
    let sortIcon;

    if (currentSort === "up") {
      nextSort = "down";
      sortIcon = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-sort-alpha-down-alt"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"
          />
          <path
            fillRule="evenodd"
            d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z" />
        </svg>
      );
    } else if (currentSort === "down") {
      nextSort = "up";
      sortIcon = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-sort-alpha-up-alt"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"
          />
          <path
            fillRule="evenodd"
            d="M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"
          />
          <path d="M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z" />
        </svg>
      );
    }

    this.setState({
      currentSort: nextSort,
      sortIcon,
    });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value.toLowerCase(),
    });
  };

  render() {
    const data = this.state.results;
    const { currentSort } = this.state;

    return (
      data.length > 0 && (
        <div>
          <Navbar
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          <div className="jumbotron bg-transparent jumbotron-responsive">
            <table className="table table-striped table-light">
              <thead class="thead-dark text-center">
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">
                    Employee Name
                    <button onClick={this.onSortChange}>
                      {this.state.sortIcon}
                    </button>
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Location</th>
                  <th scope="col">D.O.B</th>
                </tr>
              </thead>
              <tbody>
                {console.log(data)}
                {[...data]
                  .sort(sortType[currentSort].fn)
                  .filter((employee) =>
                    employee.name.toLowerCase().includes(this.state.search)
                  )
                  .map((employee) => (
                    <Table
                      key={employee.name}
                      photo={employee.photo}
                      name={employee.name}
                      email={employee.email}
                      location={employee.location}
                      phone={employee.phone}
                      dob={employee.dob}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    );
  }
}

export default App;
