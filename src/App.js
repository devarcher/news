import React from "react";
import "./App.css";
import QueryPage from "./components/QueryPage";

class App extends React.Component {
  state = {
    query: "",
    articles: []
  };

  queryResponse = async () => {
    // Hacker News: Relevant URIs.
    const { query } = this.state;
    const baseUrl = `http://hn.algolia.com/api/v1/search?query=${query}`;

    // Fetch Queries and condition response data
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data.hits)
    const articles = data.hits.map(article => ({
      id: article.objectID,
      title: article.title,
      author: article.author,
      points: article.points,
      date_created: article.created_at,
      link: article.url
    }));
    // console.log(articles);
    this.setState({ articles: articles });
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
          articles={this.state.articles}
          handleQuery={this.handleQuery}
          querySubmit={this.querySubmit}
        />
      </div>
    );
  }
}

export default App;
