import React from "react";

function Search({ handleChange, search }) {
  return (
    <div className="ui large fluid icon input">
      <input type="text" placeholder={search} onChange={handleChange} />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
