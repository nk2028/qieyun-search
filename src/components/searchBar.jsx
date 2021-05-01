import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 字頭: "" };
  }

  handleChange = (e) => {
    this.setState({ 字頭: e.target.value });
  };

  render() {
    const { handleSearch } = this.props;

    return (
      <form
        className="d-flex"
        onSubmit={(e) => {
          handleSearch(this.state.字頭);
          e.preventDefault();
        }}
      >
        <input
          className="form-control"
          id="inputArea"
          type="search"
          aria-label="Search"
          onChange={this.handleChange}
        />
        <select>
          <option value="字頭">字頭</option>
        </select>
        <input className="btn btn-outline-success" type="submit" value="🔍" />
      </form>
    );
  }
}
