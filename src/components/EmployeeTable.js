import react from "react";
import API from "../utils/API";
import Row from "./Row";
import SearchForm from "./SearchForm";
import './style.css'
// uuid to use for key
import { v4 as uuidv4 } from "uuid";

uuidv4();

// Code below for sort adapted from
// https://codepen.io/austinlyons/pen/YpmyJB?editors=0010

/*
  Table component written as an ES6 arrow function
*/
class Table extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount() {
    API.getUsers().then(res => {
      console.log(res);
      this.setState({
        data: res.data.results
        // commented out sections are attempts at destructuring to make sort function work
        // {
        //   first: res.data.results.name.first,
        //   last: res.data.results.name.last,
        //   location: res.data.results.location.city,
        //   email: res.data.results.email,
        //   phone: res.data.results.phone,
        //   id: res.data.results.id.value,
        //   pic: res.data.results.picture.thumbnail
        // }
      })
      console.log(this.state);
      // const details = this.state.map(() => {
      //     name: this.state.name.first,
      //     last: res.data.results.name.last,
      //     location: res.data.results.location.city,
      //     email: res.data.results.email,
      //     phone: res.data.results.phone,
      //     id: res.data.results.id.value,
      //     picture: res.data.results.picture.thumbnail
      // })
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
    this.setState({ data: arrayCopy });
  }

  render() {
    console.log(this.state.data);
    const rows = this.state.data.map((rowData) => <Row {...rowData} />);
    return (
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th onClick={() => this.sortBy('first')} >First Name</th>
            <th onClick={() => this.sortBy('name.last')}>Last Name</th>
            <th onClick={() => this.sortBy('location')}>City</th>
            <th onClick={() => this.sortBy('email')}>Email</th>
            <th onClick={() => this.sortBy('phone')}>Phone</th>
            <th onClick={() => this.sortBy('id')}>ID</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}



export default Table