import React from 'react';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import API from "./utils/API";
import moment from "moment";
import "./App.css";



class App extends React.Component {
  state = {
    results: [],
    search: "",
    
  }; 

  componentDidMount() {
    API.getUser()
      .then(res =>
        res.data.results.map(result => ({
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
      .then(newData => this.setState({ results: newData }))
      .catch(error => console.log(error));
  }
  
  

  

  










 

export default App;
