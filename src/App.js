import React, { Component } from "react";
import Contacts from "./components/contact";
import Header from "./components/heading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch(
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data.paid });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        <Header />
        <Contacts
          key={this.state.contacts.conference_id}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
export default App;
