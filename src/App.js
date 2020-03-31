import React, { Component } from "react";
import Conferences from "./components/contact";
import SearchField from "react-search-field";
import Header from "./components/heading";
import "./components/style.css";
import Filter from "./components/Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: [],
      search: "",
      filterCity: null,
      filterMonth: null,
      filterFreeOrPaid: null,
      filterCountry: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterConferences = this.filterConferences.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e });
    this.componentDidMount();
  }

  filterConferences(conf) {
    var confs =
      conf.city.toLowerCase().match(this.state.search.toLowerCase()) ||
      conf.confName.toLowerCase().match(this.state.search.toLowerCase());
    if (this.state.filterCity) {
      confs = conf.city === this.state.filterCity;
    }
    // if (this.state.filterMonth) {
    //   confs = conf.month == this.state.filterMonth;
    // }
    if (this.state.filterFreeOrPaid) {
      confs = conf.entryType === this.state.filterFreeOrPaid;
    }
    if (this.state.filterCountry) {
      confs = conf.country === this.state.filterCountry;
    }
    return confs;
  }

  componentDidMount() {
    fetch(
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    )
      .then(res => res.json())
      .then(Confs => Confs.paid.concat(Confs.free))
      .then(allConfs => allConfs.filter(this.filterConferences))
      .then(filteredConfs => {
        this.setState({
          conferences: filteredConfs.sort(
            (a, b) => Date.parse(a.confStartDate) - Date.parse(b.confStartDate)
          )
        });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="box">
          <SearchField
            placeholder="Search by Name or City"
            onChange={this.handleChange}
          />
          <Filter />
          {/* onChange={this.filterConferences} */}
        </div>
        <Conferences
          key={this.state.conferences.conference_id}
          conferences={this.state.conferences}
        />
      </div>
    );
  }
}
export default App;
