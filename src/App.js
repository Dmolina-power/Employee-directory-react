import React from 'react';
import Navbar from "./components/Navbar";
import Table from "./components/table";
import API from "./utils/API";


class App extends React.Component {
  state = {
    results: [],
    search: "",
  }; 

  componentDidMount() {
    API.employee().then(({ data }) => {
      const users = data.results.map((user) => {
        console.log(user)
        return {

          
        };
      });

      const sortname = users.sort((a, b) =>
        a.fullname.localeCompare(b.fullname)
      );
      this.setState({ results: sortname });
    });
  }

  onSortUp = () => {
    const sortUp = this.state.results.sort((a, b) =>
      a.fullname.localeCompare(b.fullname)
    );

    this.setState({
      results: sortUp,
    });
  };

  onSortDown = () => {
    const sortDown = this.state.results.sort((a, b) =>
      b.fullname.localeCompare(a.fullename)
    );

    this.setState({
      results: sortDown,
    });
  };

  

  // this.state.results
  //   .filter((employee) =>
  //     employee.fullname.toLowerCase().includes(this.state.search)
  //   )
  //   .map((result) => (
      
  //       photo={result.image},
  //       name={result.fullname},
  //       email={result.email},
  //       phone={result.phone},
  //       dob={result.dob},
  //   ))    
      
    

  render(){
    return (
      <div>
      < Navbar/>
      < Table/>
      </div>
    );
  }
}












 

export default App;
