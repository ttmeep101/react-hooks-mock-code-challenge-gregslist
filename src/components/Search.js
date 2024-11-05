import React, {useState} from "react";


function Search({setListings}) {
  const [sortVal, setSortVal] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => {
      const filteredListings = data.filter(data => data.description.toLowerCase().includes(sortVal.toLowerCase()))
      setListings(filteredListings)
    })
    setSortVal('')
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={sortVal}
        onChange={(e) => setSortVal(`${e.target.value}`)}
      />
      <button type="submit">🔍</button>
    </form>

  );
}

export default Search;
