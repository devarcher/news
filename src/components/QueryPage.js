import React from "react";

class QueryPage extends React.Component {
  
  
  render() {
    const { query, handleQuery, querySubmit } = this.props
    return (
      <div>
        <input
          type="text"
          value={query}
          className="searchBar"
          onChange={(e) => {handleQuery(e)}}
        />
        <button className="buttonSubmit" onClick={(e) =>{querySubmit(e)}}>
          Submit
        </button>
        <div className="results">
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default QueryPage;
