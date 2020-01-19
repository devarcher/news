import React from "react";

class QueryPage extends React.Component {
  render() {
    const {
      query,
      articles,
      selectorHandler,
      handleQuery,
      querySubmit
    } = this.props;

    return (
      <div>
        <label>
          Search Hacker News!!!
          <select onChange={e => selectorHandler(e)}>
            <option value="general">General Search</option>
            <option value="author">Search By Author</option>
            <option value="date">Search By Date</option>
          </select>
          <input
            type="text"
            value={query}
            className="searchBar"
            onChange={e => {
              handleQuery(e);
            }}
          />
          <button
            className="buttonSubmit"
            onClick={e => {
              querySubmit(e);
            }}
          >
            Submit
          </button>
        </label>
        <div>
          <ul className="articlesUl">
            {articles.map(article => (
              <li className="articleLi" key={article.id}>
                <div className="titleAuthor">
                  {article.title} Author: {article.author}
                </div>
                <div>Link: {article.link ? article.link : "No Link Available"} </div>
                <div>
                  Points: {article.points} Date Written: {article.date_created}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default QueryPage;
