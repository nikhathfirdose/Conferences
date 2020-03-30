import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 30) });
  }
  render() {
    return (
      <div>
        <center>
          <h1>Conferences</h1>
        </center>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}
export default Header;
