import React, { useEffect } from "react";
import {useState} from 'react'

function ListingCard(listing) {
  
  const [isFavorite, setFavorite] = useState(false)

  function toggleFavorite(){
    setFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.listing.description}</strong>
        <span> · {listing.listing.location}</span>
        <button onClick={() => listing.removeItem(listing.listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
