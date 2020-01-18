import React from "react";
import "./App.css";
import QueryPage from "./components/QueryPage";

class App extends React.Component {
  state = {
    query: ""
  };

  queryResponse = async () => {
    // Hacker News: Relevant URIs.
    const { query } = this.state;
    const baseUrl = `http://hn.algolia.com/api/v1/search?query=${query}`;

    // Fetch Queries
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
  };

  querySubmit = e => {
    e.preventDefault();
    this.queryResponse();
  };

  handleQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <QueryPage
          query={this.state.query}
          handleQuery={this.handleQuery}
          querySubmit={this.querySubmit}
        />
      </div>
    );
  }
}

export default App;
