import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

const QueryPage = props => {
  const { query, articles, selectHandler, queryHandler, submitHandler } = props;

  return (
    <div className="container">
      <div className="searchContainer">
        <h1>Hacker News</h1>
        <select className="selectorBox" onChange={e => selectHandler(e)}>
          <option value="general">General Search</option>
          <option value="author">Search By Author</option>
          <option value="date">Search By Date</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={query}
          className="searchBar"
          onChange={e => {
            queryHandler(e);
          }}
        />
        <button
          className="buttonSubmit"
          onClick={e => {
            submitHandler(e);
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="articlesContainer">
        <ul className="articlesUl">
          {articles.map(article => (
            <li className="articleLi" key={article.id}>
              <div className="titleAuthor">
                 {article.link ? <a href={article.link} target="blank_"><h1>{article.title}</h1></a> : <h1>{article.title} -- No Link</h1>}
                <h2>Author: {article.author}</h2>
              </div>
              <div>
                <h3>Points: {article.points}</h3> 
                <h3>Date:
                  {moment(article.date_created).format("MM/DD/YYYY")}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryPage;
