import react from "react";
import API from "../utils/API";
import Row from "./Row";
import SearchForm from "./SearchForm";
// uuid to use for key
import {v4 as uuidv4} from "uuid";

uuidv4();

// Code below for sort adapted from
// https://codepen.io/austinlyons/pen/YpmyJB?editors=0010

  /*
    Table component written as an ES6 arrow function
  */
  class Table extends react.Component {
    state = {
      data: [],
      }
    
    componentDidMount() {
      API.getUsers().then(res => {
        console.log(res);
        this.setState({data: res.data.results})
        console.log(this.props);
      })
    }  
    compareBy = (key) => {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
   
    sortBy = (key) => {
      let arrayCopy = [...this.state.data];
      arrayCopy.sort(this.compareBy(key));
      this.setState({data: arrayCopy});
    }

    render(){
    return (
      <table className="table">
        <thead>
          <tr>
          <th onClick={() => this.sortBy('first')} >First Name</th>
          <th onClick={() => this.sortBy('last')}>Last Name</th>
          <th onClick={() => this.sortBy('city')}>City</th>
          <th onClick={() => this.sortBy('email')}>Email</th>
          <th onClick={() => this.sortBy('phone')}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map( (rowData) => <Row {...rowData} />)}
        </tbody>
      </table>
      )
  }
  }


  
export default Table