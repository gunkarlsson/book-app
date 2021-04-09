import React, { useState } from "react";

const Search = () => {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        name="search"
        type="text"
        placeholder="Search for a book"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      <label htmlFor="maxResults">Max results</label>
      <input
        id="maxResults"
        type="number"
        placeholder="Max results"
        value={maxResults}
        onChange={(e) => setMaxResults(e.target.value)}
      />
      <label htmlFor="startIndex">Start index</label>
      <input
        id="startIndex"
        type="number"
        placeholder="Start index"
        value={startIndex}
        onChange={(e) => setStartIndex(e.target.value)}
      />
    </div>
  );
};

export default Search;
