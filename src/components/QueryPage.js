import React from "react";
import moment from 'moment';

const QueryPage = (props) => {
    const {
      query,
      articles,
      selectHandler,
      queryHandler,
      submitHandler
    } = props;

    return (
      <div>
          <select onChange={e => selectHandler(e)}>
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
            Submit
          </button>
        <div>
          <ul className="articlesUl">
            {articles.map(article => (
              <li className="articleLi" key={article.id}>
                <div className="titleAuthor">
                  {article.title} Author: {article.author}
                </div>
                <div>Link: {article.link ? article.link : "No Link Available"} </div>
                <div>
                  Points: {article.points} Date Written: {moment(article.date_created).format('MM/DD/YYYY')}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default QueryPage;
