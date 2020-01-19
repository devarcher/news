import React from "react";

class QueryPage extends React.Component {
  render() {
    const { query, articles, handleQuery, querySubmit } = this.props;

    return (
      <div>
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
        <div>
          <ul className="articlesUl">
            {articles.map(article => (
              <li className="articleLi" key={article.id}>
                <div className="titleAuthor">
                  {article.title} Author: {article.author}
                </div>
                <div>Link: {article.link} </div>
                <div>Points: {article.points} Date Written: {article.date_created}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default QueryPage;
