import React from "react";
import "./App.css";
import QueryPage from "./components/QueryPage";

class App extends React.Component {
  state = {
    query: "",
    articles: [],
    searchOption: `http://hn.algolia.com/api/v1/search?query=`
  };

  queryResponse = async () => {
    // Hacker News: Relevant URIs.
    const { searchOption } = this.state;
    const { query } = this.state;

    // Fetch Queries and condition response data
    const response = await fetch(`${searchOption}${query}&tags=story`);
    const data = await response.json();
    // console.log(data.hits);
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

  submitHandler = e => {
    e.preventDefault();
    this.queryResponse();
  };

  queryHandler = e => {
    this.setState({ query: e.target.value });
  };

  selectHandler = e => {
    if (e.target.value === "author") {
      this.setState({
        searchOption: `http://hn.algolia.com/api/v1/search?tags=story,author_`
      });
    }

    if (e.target.value === "date") {
      this.setState({
        searchOption: `http://hn.algolia.com/api/v1/search_by_date?query=`
      });
    }

    if (e.target.value === "general") {
      this.setState({
        searchOption: `http://hn.algolia.com/api/v1/search?query=`
      });
    }
  };

  render() {
    return (
      <div className="App">
        <QueryPage
          query={this.state.query}
          articles={this.state.articles}
          queryHandler={this.queryHandler}
          submitHandler={this.submitHandler}
          selectHandler={this.selectHandler}
        />
      </div>
    );
  }
}

export default App;
