import react from "react";
import API from "../utils/API";
import Row from "./Row";

// Code below adapted from
// https://codepen.io/austinlyons/pen/YpmyJB?editors=0010

  
  /*
    Table component written as an ES6 arrow function
  */
  class Table extends react.Component {
    state = {
      data: []
      }
    
    componentDidMount() {
      API.getUsers().then(res => {
        console.log(res);
        this.setState({data: res.data.results})
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
          <th onClick={() => this.sortBy('name')} >ID</th>
          <th onClick={() => this.sortBy('title')}>Title</th>
          <th onClick={() => this.sortBy('priority')}>Priority</th>
          <th onClick={() => this.sortBy('type')}>Issue Type</th>
          <th onClick={() => this.sortBy('complete')}>% Complete</th>
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