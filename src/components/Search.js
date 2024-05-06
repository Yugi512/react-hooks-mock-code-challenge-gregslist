import React from "react";

function Search({input, setInput}) {

  function handleChange(e){
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput(input)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
