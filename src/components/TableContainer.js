import React, { Component } from "react";
import Row from "./Row";
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class TableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            search: ""
        };
    }

    searchEmployees = query => {
        API.getUsers(query)
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState(
            {
                ...this.state,
                search: event.tarteg.value.toLowerCase()
            }
        )
    };

    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeTable
                    search={this.state.search}
                />
            </div>
        );
    }
}

export default TableContainer;
