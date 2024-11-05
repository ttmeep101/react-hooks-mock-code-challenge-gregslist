import ListingCard from "./ListingCard";
import React, {useEffect, useState} from 'react'

function ListingsContainer({listings, setListings}) {
  const [isLoading, setLoading] = useState(false)

    {useEffect(() => {
    if(!isLoading) {
      setLoading(true)
      fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(data => {
      setListings(data)
      }, [])
    }
    })}

    const removeItem = (id) => {
      fetch(`http://localhost:6001/listings/${id}`, 
        {method: 'DELETE'})
      .then(() => setListings(listings.filter((listings) => listings.id !== id)))
    }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing, index) => (
          <ListingCard
          key = {index}
          listing = {listing}
          removeItem = {removeItem}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
