import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    console.log(searchTerm);
  };
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  render() {
    return (
      <Paper elevation={3} style={{ padding: "25px", position: "sticky" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            xs={10}
            label="Search"
            fullWidth
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
