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
            {/* {articles.map(article => (
              <li className="articleLi" key={article.objectID}>
                {article.title}
              </li> */}
            {/* ))} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default QueryPage;
