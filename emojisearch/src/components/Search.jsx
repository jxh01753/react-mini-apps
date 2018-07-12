import React from "react";
import PropTypes from "prop-types";

function Search(props) {
  return (
    <div>
      <label>Search: </label>
      <input onChange={props.changeSearchTerm} className="search-box" autoFocus />
    </div>
  );
}

Search.propTypes = {
  changeSearchTerm: PropTypes.func.isRequired
};

export default Search;
